-- CREATE DATABASE test; -- test 데이터베이스 생성

-- USE test; -- test 데이터베이스 사용

-- 테이블 생성
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    e_name VARCHAR(100),
    position VARCHAR(100),
    salary DECIMAL(10, 2)
    );
    
-- 직원 데이터를 추가.
INSERT INTO employee (e_name, position, salary)
VALUES ('혜린', 'PM', 90000),
       ('은우', 'Frontend', 80000),
       ('가을', 'Backend', 92000),
       ('지수', 'Frontend', 78000),
       ('민혁', 'Frontend', 96000),
       ('하온', 'Backend', 30000);
       
-- 모든 직원의 이름과 연봉 정보만 검색
SELECT e_name, salary FROM employee;

-- 연봉 90000이하인 직원 이름과 연봉 검색 
SELECT e_name, salary FROM employee WHERE position = 'Frontend' AND salary <= 90000;

-- pm직책을 가진 직원 연봉을 10%인상 후 결과 확인
update employee set salary = salary * 1.10 where id = 1;
SELECT * FROM employee WHERE position = 'congrate';

-- employees 테이블 삭제
DROP TABLE emplyees;