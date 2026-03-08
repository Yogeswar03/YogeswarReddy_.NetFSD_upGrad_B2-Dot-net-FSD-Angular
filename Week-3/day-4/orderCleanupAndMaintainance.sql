use ecommappdb;

-- Insert Achieved Orders
CREATE TABLE archived_orders LIKE orders;
INSERT INTO archived_orders
SELECT *
FROM orders
WHERE order_status = 3
AND order_date < DATE_SUB(CURDATE(), INTERVAL 1 YEAR);

-- Delete Rejected Orders older than an year

DELETE FROM orders
WHERE order_status = 3
AND order_date < DATE_SUB(CURDATE(), INTERVAL 1 YEAR);

-- Customers whose orders are completed

SELECT customer_id
FROM orders
GROUP BY customer_id
HAVING COUNT(*) = 
(
    SELECT COUNT(*)
    FROM orders o2
    WHERE o2.customer_id = orders.customer_id
    AND o2.order_status = 4
);


-- Order Processing Delay

SELECT 
order_id,
DATEDIFF(shipped_date, order_date) AS processing_delay
FROM orders;

-- Mark Orders as delayed or On Time

SELECT 
order_id,
order_date,
required_date,
shipped_date,
CASE
    WHEN shipped_date > required_date THEN 'Delayed'
    ELSE 'On Time'
END AS delivery_status
FROM orders;