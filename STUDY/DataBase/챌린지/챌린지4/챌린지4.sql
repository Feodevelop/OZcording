USE test;

-- **CREATE**
-- customers 테이블 생성
CREATE TABLE customers(
    c_id INT AUTO_INCREMENT PRIMARY KEY,
    c_name VARCHAR(100),
    f_name VARCHAR(30),
    c_number VARCHAR(100),
    city VARCHAR(100)
);

-- products 테이블 생성
CREATE TABLE products(
    p_id INT AUTO_INCREMENT PRIMARY KEY,
    productnum INT,
    productname VARCHAR(100),
    price INT
);

-- employees 테이블 생성
CREATE TABLE employees(
    e_id INT AUTO_INCREMENT PRIMARY KEY,
    employeenum INT,
    lastname VARCHAR(100),
    firstname VARCHAR(100),
    position VARCHAR(100)
);

-- offices 테이블 생성
CREATE TABLE offices(
    o_id INT AUTO_INCREMENT PRIMARY KEY,
    of_num INT,
    city VARCHAR(100),
    address VARCHAR(100),
    phone VARCHAR(100)
);

-- orders 테이블 생성
CREATE TABLE orders(
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    ordernum INT,
    checknumber VARCHAR(100),
    requireddate VARCHAR(100),
    orderstatus VARCHAR(100),
    c_number INT
);

-- orderdetails 테이블 생성
CREATE TABLE orderdetails(
    orderdetail_id INT AUTO_INCREMENT PRIMARY KEY,
    ordernum INT,
    productnum INT,
    quantityorder INT,
    priceeach INT,
    orderlinenumber INT
);

-- payments 테이블 생성
CREATE TABLE payments(
    pay_id INT AUTO_INCREMENT PRIMARY KEY,
    c_number INT,
    orderdate VARCHAR(100),
    paymentdate VARCHAR(100),
    amount INT
);

-- productlines 테이블 생성
CREATE TABLE productlines(
    pay_id INT AUTO_INCREMENT PRIMARY KEY,
    productline VARCHAR(100),
    textdescription VARCHAR(100)
);

-- **INSERT**
-- customers테이블에 새 고객을 추가하세요.
insert into customers(c_name,l_name,c_number) values("jaehyeong","lee",35);

-- product테이블에 새 제품을 추가하세요.
INSERT INTO products(productnum, productname, price) VALUES (10561052, 'lineclear', 30000);

-- employees 테이블에 새 직원을 추가하세요.
INSERT INTO employees(employeenum, lastname, firstname, position) VALUES (500, 'john', 'kim', 'Seller');

-- offices 테이블에 새 사무실을 추가하세요.
INSERT INTO offices(of_num, country, address, phone) VALUES ('302', 'korea', 'Incheon Namdonggu Mansu-dong', '+82 10-7663-6220');

-- orders 테이블에 새 주문을 추가하세요.
INSERT INTO orders(ordernum, orderdate, requireddate, orderstatus, c_number) VALUES (1000, '2024-04-21', '2024-04-28', '배송완료', 100);

-- orderdetails 테이블에 주문 상세 정보를 추가하세요.
INSERT INTO orderdetails(ordernum, productnum, quantityorder, priceeach, orderlinenumber) VALUES (1000, 100, 2, 25000, 1);

-- payments 테이블에 지불 정보를 추가하세요.
INSERT INTO payments(c_number, checknumber, paymentdate, amount) VALUES (100, 'CH123456', '2024-04-21', 2000);

-- productlines 테이블에 제품 라인을 추가하세요.
INSERT INTO productlines(productline, textdescription) VALUES ('Toys', 'dolls');

-- customers 테이블에 다른 지역의 고객을 추가하세요.
INSERT INTO customers(c_name, l_name, c_number, city) VALUES ('dahyeon', 'lee', 101, 'seoul');

-- products 테이블에 다른 카테고리의 제품을 추가하세요.
INSERT INTO products(productnum, productname, price, productline) VALUES (101, 'Slime', 3000, 'Toys');

-- **SELECT**
--  customers 테이블에서 모든 고객 정보를 조회하세요.
SELECT * FROM customers;

--  products 테이블에서 모든 제품 목록을 조회하세요.
SELECT * FROM products;

--  employees 테이블에서 모든 직원의 이름과 직급을 조회하세요.
SELECT firstname, lastname, position FROM employees;

--  offices 테이블에서 모든 사무실의 위치를 조회하세요.
SELECT city, address FROM offices;

--  orders 테이블에서 최근 10개의 주문을 조회하세요.
SELECT * FROM orders ORDER BY orderdate DESC LIMIT 10;

--  orderdetails 테이블에서 특정 주문의 모든 상세 정보를 조회하세요.
SELECT * FROM orderdetails WHERE ordernum = 1;

--  payments 테이블에서 특정 고객의 모든 지불 정보를 조회하세요.
SELECT * FROM payments WHERE c_number = 10561052;

--  productlines 테이블에서 각 제품 라인의 설명을 조회하세요.
SELECT productline, textdescription FROM productlines;

--  customers 테이블에서 특정 지역의 고객을 조회하세요.
SELECT * FROM customers WHERE city = seoul;

--  products 테이블에서 특정 가격 범위의 제품을 조회하세요.
SELECT * FROM products WHERE price BETWEEN 100 AND 15000;

--  customers 테이블에서 특정 고객의 주소를 갱신하세요.
UPDATE customers SET address = '[새로운 주소]' WHERE c_num = 2;

--  products 테이블에서 특정 제품의 가격을 갱신하세요.
UPDATE products SET price = 15000 WHERE productnum = 1;

--  employees 테이블에서 특정 직원의 직급을 갱신하세요.
UPDATE employees SET position = '[새로운 직급]' WHERE e_number = 1;

--  offices 테이블에서 특정 사무실의 전화번호를 갱신하세요.
UPDATE offices SET phone = '[새로운 전화번호]' WHERE of_num = 1;

--  orders 테이블에서 특정 주문의 상태를 갱신하세요.
UPDATE orders SET status = '[새로운 상태]' WHERE ordernum = 1;

--  orderdetails 테이블에서 특정 주문 상세의 수량을 갱신하세요.
UPDATE orderdetails SET quantityorder = 6 WHERE ordernum = 4 AND productnum = 1;

--  payments 테이블에서 특정 지불의 금액을 갱신하세요.
UPDATE payments SET amount = 3 WHERE c_number = 5;

--  productlines 테이블에서 특정 제품 라인의 설명을 갱신하세요.
UPDATE productlines SET textdescription = '설명' WHERE productline = '제품';

--  customers 테이블에서 특정 고객의 이메일을 갱신하세요.
UPDATE customers SET email = '[새로운 이메일]' WHERE c_number = 1;

--  products 테이블에서 여러 제품의 가격을 한 번에 갱신하세요.
UPDATE products SET price = 3 WHERE productnum IN (1,3);

--  customers 테이블에서 특정 고객을 삭제하세요.
DELETE FROM customers WHERE customernumber = 1;

--  Products 테이블에서 특정 제품을 삭제하세요.
DELETE FROM products WHERE productnum = 1;

--  employees 테이블에서 특정 직원을 삭제하세요.
DELETE FROM employees WHERE e_number = 1;

--  offices 테이블에서 특정 사무실을 삭제하세요.
DELETE FROM offices WHERE of_num = 1;

--  orders 테이블에서 특정 주문을 삭제하세요.
DELETE FROM orders WHERE ordernum = 1;

--  orderdetails 테이블에서 특정 주문 상세를 삭제하세요.
DELETE FROM orderdetails WHERE ordernum = 1;

--  payments 테이블에서 특정 지불 내역을 삭제하세요.
DELETE FROM payments WHERE c_number = 1;

--  productlines 테이블에서 특정 제품 라인을 삭제하세요.
DELETE FROM productlines WHERE productline = '[~~~]';

--  customers 테이블에서 특정 지역의 모든 고객을 삭제하세요.
DELETE FROM customers WHERE city = '[특정 지역]';

--  products 테이블에서 특정 카테고리의 모든 제품을 삭제하세요.
DELETE FROM products WHERE productline = '[특정 제품 라인]';