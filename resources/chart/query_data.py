import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template
from sqlalchemy.schema import MetaData
import pandas as pd 

Base = automap_base()
engine = create_engine('postgresql://postgres:password@localhost/trade')
#Base.metadata.create_all(engine)
session = Session(bind=engine)
Base.prepare(engine, reflect=True)
Base.classes.keys()



def query_growth():

    CouG = Base.classes.country_growth
    session = Session(engine)

    coug_query = session.query(CouG.indicator_type, CouG.country, CouG.y_2015, CouG.y_2016, CouG.y_2017, CouG.y_2018).all()
    session.close()

    all_results = []

    for CouG.indicator_type, CouG.country, CouG.y_2015, CouG.y_2016, CouG.y_2017, CouG.y_2018 in coug_query:
        results_dict = {}
        results_dict["indicator"] = CouG.indicator_type
        results_dict["country"] = CouG.country
        results_dict["2015"] = CouG.y_2015
        results_dict["2016"] = CouG.y_2016
        results_dict["2017"] = CouG.y_2017
        results_dict["2018"] =  CouG.y_2018
        all_results.append(results_dict)
    return (all_results)

#query_growth()

def import_dollars():

    ImpDol = Base.classes.import_dollars
    
    session = Session(engine)

    imp_query = session.query(ImpDol.reporter_name, ImpDol.partner_name, ImpDol.product_group, ImpDol._indicator, ImpDol.y_2013, ImpDol.y_2014,ImpDol.y_2015,ImpDol.y_2016,ImpDol.y_2017,ImpDol.y_2018).all()
    
    session.close()


    impdol_results = []

    for ImpDol.reporter_name, ImpDol.partner_name, ImpDol.product_group, ImpDol._indicator, ImpDol.y_2013, ImpDol.y_2014,ImpDol.y_2015,ImpDol.y_2016,ImpDol.y_2017,ImpDol.y_2018 in imp_query:
        results_dict = {}
        results_dict["reporter_name"] = ImpDol.reporter_name
        results_dict["partner_name"] = ImpDol.partner_name
        results_dict["product_group"] = ImpDol.product_group
        results_dict["_indicator"] =  ImpDol._indicator
        results_dict["2013"] =  ImpDol.y_2013
        results_dict["2014"] =  ImpDol.y_2014
        results_dict["2015"] =  ImpDol.y_2015
        results_dict["2016"] =  ImpDol.y_2016
        results_dict["2017"] =  ImpDol.y_2017
        results_dict["2018"] =  ImpDol.y_2018
        impdol_results.append(results_dict)

    

import_dollars()

def getTradePercent():

    tradePercent = Base.classes.trade_percent 
    session = Session(engine)
    tradePercentQuery = session.query(tradePercent.reporter_name, tradePercent.partner_name, tradePercent.trade_flow, tradePercent.product_group, tradePercent._indicator, tradePercent.y_2008, tradePercent.y_2009, tradePercent.y_2010, tradePercent.y_2011, tradePercent.y_2012, tradePercent.y_2013, tradePercent.y_2014, tradePercent.y_2015, tradePercent.y_2016, tradePercent.y_2017, tradePercent.y_2018).all()
    session.close()

    tradePercentResults = []

    for tradePercent.reporter_name, tradePercent.partner_name, tradePercent.trade_flow, tradePercent.product_group, tradePercent._indicator, tradePercent.y_2008, tradePercent.y_2009, tradePercent.y_2010, tradePercent.y_2011, tradePercent.y_2012, tradePercent.y_2013, tradePercent.y_2014, tradePercent.y_2015, tradePercent.y_2016, tradePercent.y_2017, tradePercent.y_2018 in tradePercentQuery:
        results_dict = {}
        results_dict["reporter_name"] = tradePercent.reporter_name
        results_dict["partner_name"] = tradePercent.partner_name
        results_dict["trade_flow"] = tradePercent.trade_flow
        results_dict["product_group"] = tradePercent.product_group
        results_dict["indicator"] = tradePercent._indicator
        results_dict["2008"] = tradePercent.y_2008
        results_dict["2009"] = tradePercent.y_2009
        results_dict["2010"] = tradePercent.y_2010
        results_dict["2011"] = tradePercent.y_2011
        results_dict["2012"] = tradePercent.y_2012
        results_dict["2013"] = tradePercent.y_2013
        results_dict["2014"] = tradePercent.y_2014
        results_dict["2015"] = tradePercent.y_2015
        results_dict["2016"] = tradePercent.y_2016
        results_dict["2017"] = tradePercent.y_2017
        results_dict["2018"] = tradePercent.y_2018
        tradePercentResults.append(results_dict)
    return(tradePercentResults)

getTradePercent()