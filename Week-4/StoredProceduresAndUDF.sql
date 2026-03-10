use ecommappdb;

-- total sales amount per store

DELIMITER $$
CREATE PROCEDURE sp_total_sales__per_store()
BEGIN
    SELECT 
        s.store_id,
        SUM(oi.quantity * oi.list_price) AS total_sales
    FROM stores s
    JOIN orders o ON s.store_id = o.store_id
    JOIN order_items oi ON o.order_id = oi.order_id
    GROUP BY s.store_id;
END$$
DELIMITER ;
CALL sp_total_sales__per_store();

-- retrieve order by date range

DELIMITER $$

CREATE PROCEDURE sp_orders_by_date_range(
    IN p_start_date DATE,
    IN p_end_date DATE
)
BEGIN
    SELECT 
        order_id,
        customer_id,
        order_date,
        order_status
    FROM orders
    WHERE order_date BETWEEN p_start_date AND p_end_date;
END$$

DELIMITER ;
CALL sp_orders_by_date_range('2016-01-01','2016-12-31');

-- scalar function to calculate total price after discount

DELIMITER $$

CREATE FUNCTION fn_total_price_after_discount(
    price DECIMAL(10,2),
    discount DECIMAL(5,2)
)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    DECLARE final_price DECIMAL(10,2);

    SET final_price = price - (price * IFNULL(discount,0));

    RETURN final_price;
END$$

DELIMITER ;
SELECT fn_total_price_after_discount(1000,0.10) AS final_price;

-- table valued function for top 5 selling products

CREATE VIEW vw_top5_selling_products AS
SELECT 
    p.product_id,
    p.product_name,
    SUM(oi.quantity) AS total_sold
FROM products p
JOIN order_items oi ON p.product_id = oi.product_id
GROUP BY p.product_id, p.product_name
ORDER BY total_sold DESC
LIMIT 5;
SELECT * FROM vw_top5_selling_products;