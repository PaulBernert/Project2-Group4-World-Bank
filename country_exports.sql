--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

-- Started on 2020-07-05 20:58:44

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
-- TOC entry 206 (class 1259 OID 24787)
-- Name: country_exports; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.country_exports (
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


ALTER TABLE public.country_exports OWNER TO postgres;

--
-- TOC entry 2824 (class 0 OID 24787)
-- Dependencies: 206
-- Data for Name: country_exports; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.country_exports (indicator_type, year, canada, china, france, germany, italy, japan, united_kingdom, united_states) FROM stdin;
total_exports	2018	450277.7	2494230.19	568535.88	1562418.82	549907	738201.19	490840.36	1665302.94
total_exports	2017	420631.85	2263370.5	523385.13	1446642.44	507430.24	698097.19	442065.71	1545809.6
total_exports	2016	388853.14	2097637.17	488885.07	1337236.56	461667.63	644932.44	411463.36	1450906.27
total_exports	2015	408697.32	2273468.22	493941.21	1328500.25	456988.63	624873.51	466295.68	1501845.86
total_exports	2014	475177.18	2342292.7	566656.17	1498238.43	529528.73	690217.47	511145.44	1619742.86
total_exports	2013	456598.27	2209007.28	567987.7	1450937.52	518095.1	715097.24	548041.85	1577587.25
total_exports	2012	454098.97	2048782.23	558460.55	1412396.69	501528.85	798620.02	481225.75	1544932.01
total_exports	2011	450430.01	1898388.43	585723.82	1483802.56	523256.3	823183.76	517288.69	1481682.2
total_exports	2010	386579.9	1577763.75	511651.04	1267743.11	446839.83	769773.83	422014.12	1278099.19
total_exports	2009	315176.83	1201646.76	464112.81	1125844.05	406479.13	580718.73	359615.54	1056712.08
total_exports	2008	455632.18	1430693.07	594505	1457462.95	541786.28	781412.16	482020.96	1299898.88
total_exports	2007	419881.6	1220059.67	539730.71	1328841.35	500203.41	714327.04	454005.49	1162538.15
total_exports	2006	388178.68	968935.6	479012.85	1121962.89	417153	646725.06	458598.56	1037029.25
total_exports	2005	360552.45	761953.41	434354.25	977131.97	372957.15	594940.87	392744.02	901041.41
total_exports	2004	317161.19	593325.58	413708.42	911742.1	353543.12	565761.14	355027.95	814844.39
total_exports	2003	272229.69	438227.77	358131.72	748531.27	299465.74	472006.87	312059.9	724736.58
total_exports	2002	252584.26	325595.97	304891.88	615997.39	254215.6	416729.39	285996.25	693068.31
total_exports	2001	261058.77	266098.21	289599.1	571426.72	244252.02	403344.08	279425.46	729080.42
total_exports	2000	277419.92	249202.55	295345.42	549606.74	239931.7	479275.54	294899.05	781830.67
total_exports	1999	238778.01	194930.78	296025.16	542835.57	234962.95	417610.12	265442.49	692783.81
total_exports	1998	214606.35	183808.98	300571.07	543555.26	242102.21	388136.14	270295.29	680434.6
total_exports	1997	216037.34	182791.59	283345.62	512440.27	238265.78	421052.87	278906.97	687532.54
total_exports	1996	202262.54	151047.45	283901.2	524165.98	252098.58	410946.93	253622.09	622784.15
total_exports	1995	191117.74	148779.5	284045.61	523696.75	230441.48	442937.34	234372.2	582964.67
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


-- Completed on 2020-07-05 20:58:45

--
-- PostgreSQL database dump complete
--

