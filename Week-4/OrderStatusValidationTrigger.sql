USE ecommappdb;

-- create trigger

DELIMITER $$

CREATE TRIGGER trg_validate_order_status
AFTER UPDATE ON orders
FOR EACH ROW
BEGIN

    -- Check if order_status is set to Completed (4)
    IF NEW.order_status = 4 AND NEW.shipped_date IS NULL THEN
    
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot mark order as Completed. shipped_date cannot be NULL';
        
    END IF;

END$$

DELIMITER ;

UPDATE orders
SET order_status = 4
WHERE order_id = 101;

UPDATE orders
SET order_status = 1
WHERE order_id = 101;

