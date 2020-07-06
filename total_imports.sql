--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-07-05 21:00:09

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
-- TOC entry 205 (class 1259 OID 24784)
-- Name: total_imports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.total_imports (
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


ALTER TABLE public.total_imports OWNER TO postgres;

--
-- TOC entry 2824 (class 0 OID 24784)
-- Dependencies: 205
-- Data for Name: total_imports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.total_imports (indicator_type, year, canada, china, france, germany, italy, japan, united_kingdom, united_states) FROM stdin;
total imports	2018	459866.29	2134982.61	659374.52	1292726.05	503581.13	748217.61	671694.26	2611432.49
total imports	2017	432405.19	1843792.94	613132.64	1167753.36	453583.03	671474.31	641332.44	2405276.63
total imports	2016	402287.82	1587920.69	560554.86	1060882.07	406670.67	606924.05	636367.94	2247167.25
total imports	2015	419374.73	1679564.32	563398.25	1057535.85	410933.4	625568.42	630251.06	2313424.57
total imports	2014	463088.98	1959234.63	659872.08	1214915.24	474082.56	812184.75	694344.32	2410855.48
total imports	2013	461785.07	1949992.31	671253.55	1187301.53	479336.35	833166.06	657222.53	2265911.27
total imports	2012	462366.18	1818199.23	666675.23	1163386.79	489104.12	886031.09	689137.01	2274461.87
total imports	2011	450579.51	1743394.87	713675.25	1261588.48	558831.98	855380.47	717606.23	2263619.06
total imports	2010	392108.7	1396001.57	599171.51	1060672.35	486984.37	694059.16	627617.52	1968259.9
total imports	2009	321227.57	1005555.23	540502.28	928891.17	414783.64	551984.75	552042.03	1601895.82
total imports	2008	408762.17	1132562.16	695004.28	1192581.76	560960.37	762533.92	705344.16	2164834.03
total imports	2007	380646.62	956115.45	611364.44	1059307.81	511822.51	622243.34	679917.92	2017120.78
total imports	2006	350257.15	791460.87	529902.26	922213.39	442565.1	579063.94	614811.65	1918997.09
total imports	2005	314444.42	659952.76	475856.8	779819.06	384835.56	515866.39	528460.95	1734849.14
total imports	2004	273873.7	561228.75	434241.85	718150.02	355266.85	455253.89	502886.19	1525304.22
total imports	2003	240376.25	412759.8	362517.3	601761.02	297402.8	383465.33	425369.49	1302833.51
total imports	2002	222440.06	295170.1	303831.44	490450.06	246609.48	337613.13	372059.5	1200095.83
total imports	2001	221623.73	243552.88	293865.64	486022.07	236126.62	349291.91	358702.94	1140900.16
total imports	2000	240088.24	225093.73	303757.85	500830.03	238068.54	379708.38	374702.69	1217932.97
total imports	1999	215554.88	165699.07	286592.83	473500.68	220056.1	309994.47	315333.08	1059220.09
total imports	1998	201372.55	140236.77	286035.84	471226.32	215590.08	280633.84	311879.51	944350.1
total imports	1997	197010.9	142370.32	266575.35	445495.67	208317.1	338842.35	305135.41	898025.46
total imports	1996	170605.56	138832.74	274913.76	458699.73	208116.04	349186.1	282720.14	817627.14
total imports	1995	164370.97	132083.5	273387.34	464145.33	200319.91	336094.17	261456.48	770821.46
\.


-- Completed on 2020-07-05 21:00:09

--
-- PostgreSQL database dump complete
--

