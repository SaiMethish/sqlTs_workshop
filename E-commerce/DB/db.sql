create table product(
	product_id serial primary key,
	name varchar,
	price int,
	category varchar
);

create table orders(
	order_id serial primary key,
	order_date DATE,
	product_id int,
	foreign key (product_id) references product(product_id)
);


INSERT INTO product (name, price, category) VALUES
('Asus TUF', 599, 'laptops'),
('HP Envy', 799, 'laptops'),
('iPhone 12', 999, 'mobile phones'),
('Galaxy S21', 699, 'mobile phones'),
('RTX 3060', 499, 'graphics cards'),
('RX 6700', 699, 'graphics cards'),
('Sony WH1000', 348, 'headphones'),
('Bose 700', 379, 'headphones'),
('Beats Solo3', 199, 'headphones'),
('JBL Live', 129, 'headphones'),
('Sennheiser HD', 349, 'headphones'),
('AKG N700', 299, 'headphones');



INSERT INTO orders (order_date, product_id) VALUES
('2024-08-01', 1),
('2024-09-02', 1),
('2024-09-11', 2),
('2024-09-28', 3),
('2024-10-01', 3),
('2024-10-25', 5),
('2024-11-05', 5),
('2024-11-07', 5),
('2024-12-20', 9),
('2025-05-10', 10);


alter table products add foreign key order_id  
alter table orders rename order_date to order_placed_date;

create or replace function getOrdersByRange(start_date date,end_date date)
returns table(order_id int, order_date date, product_id int) as $$
begin
	return query
	select * from orders where order_placed_date between start_date and end_date; 
end; $$
language plpgsql;


select * from getOrdersByRange('01-08-2024','06-08-2024');