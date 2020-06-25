DROP TABLE IF EXISTS witsSummary;
DROP TABLE IF EXISTS witsGlance;

CREATE TABLE witsSummary (
	"Reporter" VARCHAR(255) PRIMARY KEY,
	"Partner" VARCHAR(255),
	"Product categories" VARCHAR(255),
	"Indicator Type" VARCHAR(255),
	"Indicator" VARCHAR(255),
	"2018" FLOAT,
	"2017" FLOAT,
	"2016" FLOAT,
	"2015" FLOAT,
	"2014" FLOAT,
	"2013" FLOAT,
	"2012" FLOAT,
	"2011" FLOAT,
	"2010" FLOAT,
	"2009" FLOAT,
	"2008" FLOAT,
  "2007" FLOAT,
  "2006" FLOAT,
  "2005" FLOAT,
  "2004" FLOAT,
  "2003" FLOAT,
  "2002" FLOAT,
  "2001" FLOAT,
  "2000" FLOAT,
  "1999" FLOAT,
  "1998" FLOAT,
  "1997" FLOAT,
  "1996" FLOAT,
  "1995" FLOAT,
  "1994" FLOAT,
  "1993" FLOAT,
  "1992" FLOAT,
  "1991" FLOAT,
  "1990" FLOAT,
  "1989" FLOAT,
  "1988" FLOAT
);

CREATE TABLE witsGlance (
	"Reporter" VARCHAR(255) PRIMARY KEY,
	"Year" VARCHAR(255),
	"Partner" INT,
	"Product categories" INT,
	"Indicator Type" INT,
	"Indicator" INT,
	"Indicator Value" INT
  --Unnamed: 7--
);
