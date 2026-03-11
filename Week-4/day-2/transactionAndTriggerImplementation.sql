use ecommappdb;
 
 -- trigger 
DELIMITER $$

CREATE TRIGGER trg_reduce_stock_after_insert
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN

    DECLARE current_stock INT;
    DECLARE order_store INT;

    -- Get store id from orders
    SELECT store_id
    INTO order_store
    FROM orders
    WHERE order_id = NEW.order_id;

    -- Get current stock
    SELECT quantity
    INTO current_stock
    FROM stocks
    WHERE product_id = NEW.product_id
    AND store_id = order_store;

    -- Prevent negative stock
    IF current_stock < NEW.quantity THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Stock insufficient. Order cannot be placed.';
    ELSE

        UPDATE stocks
        SET quantity = quantity - NEW.quantity
        WHERE product_id = NEW.product_id
        AND store_id = order_store;

    END IF;

END$$

DELIMITER ;

-- transaction 

USE ecommappdb;

START TRANSACTION;

INSERT INTO orders
(order_id, customer_id, order_status, order_date, required_date, store_id, staff_id)
VALUES
(2001, 5, 1, CURDATE(), DATE_ADD(CURDATE(), INTERVAL 7 DAY), 1, 2);

INSERT INTO order_items
(item_id, order_id, product_id, quantity, list_price, discount)
VALUES
(1, 2001, 5, 2, 1500, 0.10),
(2, 2001, 7, 1, 800, 0.05);

COMMIT;
SELECT *
FROM stocks
WHERE product_id IN (5,7);

ROLLBACK;

-- verify stock

SELECT *
FROM stocks
WHERE product_id IN (5,7);