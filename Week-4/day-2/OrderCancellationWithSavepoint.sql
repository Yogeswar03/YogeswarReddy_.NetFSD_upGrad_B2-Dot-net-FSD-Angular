USE ecommappdb;

 -- cancel order with savepoint
 
DELIMITER $$

CREATE PROCEDURE cancel_order_atomic(IN p_order_id INT)
BEGIN

    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        -- If any error occurs rollback everything
        ROLLBACK;
        SELECT 'Transaction failed. Order cancellation rolled back.' AS message;
    END;

    START TRANSACTION;

    -- Savepoint before stock restoration
    SAVEPOINT before_stock_restore;

    -- Restore stock quantities
    UPDATE stocks s
    JOIN orders o ON o.store_id = s.store_id
    JOIN order_items oi ON oi.product_id = s.product_id
    SET s.quantity = s.quantity + oi.quantity
    WHERE oi.order_id = p_order_id
    AND o.order_id = p_order_id;

    -- If stock restoration fails rollback to savepoint
    IF ROW_COUNT() = 0 THEN
        ROLLBACK TO SAVEPOINT before_stock_restore;
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Stock restoration failed.';
    END IF;

    -- Update order status to Rejected (3)
    UPDATE orders
    SET order_status = 3
    WHERE order_id = p_order_id;

    COMMIT;

    SELECT 'Order cancelled successfully and stock restored.' AS message;

END$$

DELIMITER ;

-- execute the procedure

CALL cancel_order_atomic(2001);

-- verify order status

SELECT order_id, order_status
FROM orders
WHERE order_id = 2001;

-- verify stock restoration

SELECT product_id, store_id, quantity
FROM stocks
WHERE product_id IN
(
    SELECT product_id
    FROM order_items
    WHERE order_id = 2001
);