CREATE TABLE total_gdp (
    indicator_type VARCHAR(255),
    year INT PRIMARY KEY,
    canada FLOAT,
	china FLOAT,
	france FLOAT,
	germany FLOAT,
	italy FLOAT,
	japan FLOAT,
	united_kingdom FLOAT,
	united_states FLOAT
);

CREATE TABLE total_imports (
    indicator_type VARCHAR(255),
    year INT PRIMARY KEY,
    canada FLOAT,
	china FLOAT,
	france FLOAT,
	germany FLOAT,
	italy FLOAT,
	japan FLOAT,
	united_kingdom FLOAT,
	united_states FLOAT
);

CREATE TABLE country_exports (
    indicator_type VARCHAR(255),
    year INT PRIMARY KEY,
    canada FLOAT,
	china FLOAT,
	france FLOAT,
	germany FLOAT,
	italy FLOAT,
	japan FLOAT,
	united_kingdom FLOAT,
	united_states FLOAT
);

CREATE TABLE total_country_growth (
    indicator_type VARCHAR(255),
    year INT PRIMARY KEY,
    canada FLOAT,
	china FLOAT,
	france FLOAT,
	germany FLOAT,
	italy FLOAT,
	japan FLOAT,
	united_kingdom FLOAT,
	united_states FLOAT
);