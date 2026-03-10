use ecommappdb;
-- INSERT TRIGGER

DELIMITER $$

CREATE TRIGGER trg_update_stock__after_insert
AFTER INSERT ON order_items
FOR EACH ROW
BEGIN

    DECLARE current_stock INT;
    DECLARE order_store INT;

    -- Get the store_id from orders table
    SELECT store_id
    INTO order_store
    FROM orders
    WHERE order_id = NEW.order_id;

    -- Get stock for that store and product
    SELECT quantity
    INTO current_stock
    FROM stocks
    WHERE product_id = NEW.product_id
    AND store_id = order_store;

    -- Check stock availability
    IF current_stock < NEW.quantity THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Stock is insufficient for this order';
    ELSE
        UPDATE stocks
        SET quantity = quantity - NEW.quantity
        WHERE product_id = NEW.product_id
        AND store_id = order_store;
    END IF;

END$$

DELIMITER ;

INSERT INTO order_items(item_id, order_id, product_id, quantity, list_price)
VALUES (30, 101, 5, 3, 200);
SELECT * FROM stocks WHERE product_id = 5;