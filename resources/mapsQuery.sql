/* QUERY Country GDP */
SELECT
	country,
	indicator,
	indicator_value
FROM witsglance
WHERE indicator = 'GDP (current US$ Mil)'

UNION

/* QUERY Country Population */
SELECT
	country,
	indicator,
	indicator_value
FROM witsglance
WHERE indicator = 'Population'

UNION

/* QUERY Country Trade Balance */
SELECT
	country,
    indicator,
	indicator_value
FROM witsglance
WHERE indicator = 'Trade Balance (current US$ Mil)'
ORDER BY country;

/* QUERY Top Import Partner */
/* NOT WORKING
SELECT DISTINCT ON (country)
	country,
	trade_partner,
	indicator,
	indicator_value
FROM witsglance
WHERE indicator = 'Trade (US$ Mil)-Top 5 Export Partner'
GROUP BY country, trade_partner, indicator, indicator_value
ORDER BY country;
 */