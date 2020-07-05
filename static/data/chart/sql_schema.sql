CREATE TABLE export_dollars(
	reporter_name VARCHAR(30),
	_year VARCHAR (10),
	partner_name VARCHAR(30),
	trade_flow VARCHAR(30),
	product_group VARCHAR(40),
	_indicator VARCHAR(40),
	total FLOAT
);

CREATE TABLE trade_balance(
	indicator_type VARCHAR(50),
	country VARCHAR(30),
	y_2018 FLOAT,
	y_2017 FLOAT,
	y_2016 FLOAT,
	y_2015 FLOAT,
	y_2014 FLOAT
);

CREATE TABLE country_growth(
	indicator_type VARCHAR(50),
	country VARCHAR(30) PRIMARY KEY,
	y_2018 FLOAT,
	y_2017 FLOAT,
	y_2016 FLOAT,
	y_2015 FLOAT,
	y_2014 FLOAT
);


CREATE TABLE import_dollars(
	reporter_name VARCHAR(50),
	partner_name VARCHAR(30),
	trade_flow VARCHAR(30),
	product_group VARCHAR(30),
	_indicator VARCHAR(50),
	y_2013 FLOAT,
	y_2014 FLOAT,
	y_2015 FLOAT,
	y_2016 FLOAT,
	y_2017 FLOAT,
	y_2018 FLOAT
);

CREATE TABLE trade_table(
	reporter_name VARCHAR(50),
	_year VARCHAR(20),
	trade_flow VARCHAR(50),
	product_group VARCHAR(50),
	trade_indicator VARCHAR(50),
	total_dollars FLOAT,
	total_perc FLOAT
);

SELECT * FROM trade_table WHERE reporter_name = 'Brazil';
SELECT * FROM trade_table WHERE total_dollars = 256242913;
SELECT * FROM trade_table WHERE trade_indicator = 'Macro Export (US$ Thousand)';
SELECT * FROM trade_table;

DROP TABLE trade_table;

ALTER TABLE trade_table ADD COLUMN id SERIAL PRIMARY KEY;

SELECT * FROM import_dollars;
SELECT * FROM export_dollars;
SELECT * FROM trade_balance;
SELECT * FROM country_growth;

SELECT reporter_name, product_group, _indicator, total
FROM export_dollars
WHERE _year='2009' AND _indicator like 'Macro Export (US$ Thousand)'; 

SELECT reporter_name, product_group, y_2018, y_2017, y_2016, y_2015, y_2014, y_2013
FROM import_dollars
WHERE _indicator='Macro Import (US$ Thousand)';