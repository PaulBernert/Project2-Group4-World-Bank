--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-07-05 20:59:18

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 207 (class 1259 OID 24790)
-- Name: total_country_growth; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.total_country_growth (
    indicator_type character varying(255),
    year integer,
    canada double precision,
    china double precision,
    france double precision,
    germany double precision,
    italy double precision,
    japan double precision,
    united_kingdom double precision,
    united_states double precision
);


ALTER TABLE public.total_country_growth OWNER TO postgres;

--
-- TOC entry 2824 (class 0 OID 24790)
-- Dependencies: 207
-- Data for Name: total_country_growth; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.total_country_growth (indicator_type, year, canada, china, france, germany, italy, japan, united_kingdom, united_states) FROM stdin;
Country Growth %	2018	3.56	2.31	2.22	3.15	1.76	1.5	3.97	3.1
Country Growth %	2017	4.7	7.82	4.76	4.14	6.53	3.92	4.86	3.98
Country Growth %	2016	-3.41	-3.97	-0.9	0.07	0.82	0.91	-4.36	-2.07
Country Growth %	2015	-7.17	-1.55	-7.01	-5.9	-6.02	-4.54	-6.69	-3.94
Country Growth %	2014	2.13	2.7	0.82	1.28	1.08	-1.56	-4.21	1.06
Country Growth %	2013	0.85	1.9	1.29	1.78	1.3	-4.43	7.23	0.3
Country Growth %	2012	0	1.77	-1.79	-2.54	-1.35	-0.79	0.07	2.04
Country Growth %	2011	7.72	7.08	6.53	8.11	8.06	4.04	7.34	7.86
Country Growth %	2010	11.01	13.26	4.22	6.95	4.98	13.63	5.07	9.26
Country Growth %	2009	-16.54	-7.68	-10.97	-12.72	-13.37	-13.3	-13.14	-10.76
Country Growth %	2008	4.92	6.98	4.56	4.91	4.92	4.41	2.73	6.05
Country Growth %	2007	3.63	9.91	6.53	9.15	9.17	4.68	6.85	5.81
Country Growth %	2006	3.45	10.52	5.9	6.03	6.28	3.84	4.07	6.19
Country Growth %	2005	6.1	11.63	1.63	3.74	3.2	2.99	4.24	4
Country Growth %	2004	8.07	15.02	8.18	9.94	8.4	9.44	6.52	6.01
Country Growth %	2003	3.02	12.53	8.99	10.01	8.63	6.41	4.56	2.17
Country Growth %	2002	-1.51	9.48	1.51	4.22	2.46	1.67	-0.53	-2.01
Country Growth %	2001	-3.23	1.91	0.26	1.4	0.69	-6.74	-2.39	-3.55
Country Growth %	2000	8.46	12.8	0.68	1.88	0.5	7.88	4.49	5.79
Country Growth %	1999	5.12	6.19	-0.09	0.41	-1.03	3.83	1.4	0.84
Country Growth %	1998	0.59	0.62	3.11	2.61	1.11	-3.65	0.1	-0.3
Country Growth %	1997	3.48	6.94	1.77	0.07	-0.69	4.12	2.02	6.14
Country Growth %	1996	2.91	5.27	0.56	1.04	4.01	-2.07	4.25	4.49
Country Growth %	1995	7.83	10.19	15.55	15.83	12.78	6.32	13.7	9.39
\.


-- Completed on 2020-07-05 20:59:18

--
-- PostgreSQL database dump complete
--

