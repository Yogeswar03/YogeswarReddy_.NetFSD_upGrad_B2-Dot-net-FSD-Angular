USE ecommappdb;

-- CURSOR 
 
DELIMITER $$

CREATE PROCEDURE sp_store_revenue_cursor()
BEGIN

    DECLARE done INT DEFAULT 0;
    DECLARE v_order_id INT;
    DECLARE v_store_id INT;
    DECLARE v_revenue DECIMAL(10,2);

    -- Cursor to fetch completed orders
    DECLARE order_cursor CURSOR FOR
        SELECT order_id, store_id
        FROM orders
        WHERE order_status = 4;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

    -- Temporary table
    CREATE TEMPORARY TABLE IF NOT EXISTS temp_revenue(
        store_id INT,
        order_id INT,
        revenue DECIMAL(10,2)
    );

    START TRANSACTION;

    OPEN order_cursor;

    read_loop: LOOP

        FETCH order_cursor INTO v_order_id, v_store_id;

        IF done THEN
            LEAVE read_loop;
        END IF;

        -- Calculate revenue for the order
        SELECT SUM(quantity * list_price * (1 - discount))
        INTO v_revenue
        FROM order_items
        WHERE order_id = v_order_id;

        -- Insert into temp table
        INSERT INTO temp_revenue(store_id, order_id, revenue)
        VALUES(v_store_id, v_order_id, IFNULL(v_revenue,0));

    END LOOP;

    CLOSE order_cursor;

    COMMIT;

    -- Store-wise summary
    SELECT 
        store_id,
        SUM(revenue) AS total_store_revenue
    FROM temp_revenue
    GROUP BY store_id;

END$$

DELIMITER ;

CALL sp_store_revenue_cursor();