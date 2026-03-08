use ecommdb;

-- retrieve products and categories

SELECT 
p.product_name,
b.brand_name,
c.category_name,
p.list_price
FROM products p
JOIN brands b ON p.brand_id = b.brand_id
JOIN categories c ON p.category_id = c.category_id;

-- customers from a specific city

SELECT *
FROM customers
WHERE city = 'New York';

-- total products from each category

SELECT 
c.category_name,
COUNT(p.product_id) AS total_products
FROM categories c
LEFT JOIN products p 
ON c.category_id = p.category_id
GROUP BY c.category_name;