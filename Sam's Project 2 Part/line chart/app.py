import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template
from sqlalchemy.schema import MetaData
import pandas as pd 

app = Flask(__name__)

Base = automap_base()

engine = create_engine('postgresql://postgres:postgres@localhost:5432/trade_data')
session = Session(bind=engine)

Base.prepare(engine, reflect=True)

Base.classes.keys()

total_gdp_test = Base.classes.total_gdp_test
session = Session(engine)
   
total_gdp_test_query = session.query(total_gdp_test._indicator_type, total_gdp_test._year, total_gdp_test._canada, 
total_gdp_test._china, total_gdp_test._france, total_gdp_test._germany, total_gdp_test._italy, total_gdp_test._japan, 
total_gdp_test._united_kingdom, total_gdp_test._united_states).all()
session.close()

gdp_results = []
for total_gdp_test._indicator_type, total_gdp_test._year, total_gdp_test._canada, total_gdp_test._china, total_gdp_test._france, total_gdp_test._germany, total_gdp_test._italy, total_gdp_test._japan, total_gdp_test._united_kingdom, total_gdp_test._united_states in total_gdp_test_query:
        results_dict = {}
        results_dict["indicator"] = total_gdp_test._indicator_type
        results_dict["year"] = total_gdp_test._year
        results_dict["canada"] = total_gdp_test._canada
        results_dict["china"] =  total_gdp_test._china
        results_dict["france"] = total_gdp_test._france
        results_dict["germany"] = total_gdp_test._germany
        results_dict["italy"] = total_gdp_test._italy
        results_dict["japan"] =  total_gdp_test._japan
        results_dict["united_kingdom"] = total_gdp_test._united_kingdom
        results_dict["united_states"] =  total_gdp_test._united_states
        gdp_results.append(results_dict)


total_imports_test = Base.classes.total_imports_test
session = Session(engine)

total_imports_test_query = session.query(total_imports_test.indicator_type, total_imports_test.year, total_imports_test.canada, 
total_imports_test.china, total_imports_test.france, total_imports_test.germany, total_imports_test.italy, 
total_imports_test.japan, total_imports_test.united_kingdom, total_imports_test.united_states).all()
session.close()

imports_results = []
for total_imports_test.indicator_type, total_imports_test.year, total_imports_test.canada, total_imports_test.china, total_imports_test.france, total_imports_test.germany, total_imports_test.italy, total_imports_test.japan, total_imports_test.united_kingdom, total_imports_test.united_states in total_imports_test_query:
    results_dict = {}
    results_dict["indicator"] = total_imports_test.indicator_type
    results_dict["year"] = total_imports_test.year
    results_dict["canada"] = total_imports_test.canada
    results_dict["china"] =  total_imports_test.china
    results_dict["france"] = total_imports_test.france
    results_dict["germany"] = total_imports_test.germany
    results_dict["italy"] = total_imports_test.italy
    results_dict["japan"] =  total_imports_test.japan
    results_dict["united_kingdom"] = total_imports_test.united_kingdom
    results_dict["united_states"] =  total_imports_test.united_states
    imports_results.append(results_dict)

country_exports = Base.classes.country_exports
session = Session(engine)

country_exports.query = session.query(country_exports.indicator_type, country_exports.year, country_exports.canada, 
country_exports.china, country_exports.france, country_exports.germany, country_exports.italy, 
country_exports.japan, country_exports.united_kingdom, country_exports.united_states).all()
session.close()

exports_results = []
for country_exports.indicator_type, country_exports.year, country_exports.canada, country_exports.china, country_exports.france, country_exports.germany, country_exports.italy, country_exports.japan, country_exports.united_kingdom, country_exports.united_states in country_exports.query:
    results_dict = {}
    results_dict["indicator"] = country_exports.indicator_type
    results_dict["year"] = country_exports.year
    results_dict["canada"] = country_exports.canada
    results_dict["china"] =  country_exports.china
    results_dict["france"] = country_exports.france
    results_dict["germany"] = country_exports.germany
    results_dict["italy"] = country_exports.italy
    results_dict["japan"] =  country_exports.japan
    results_dict["united_kingdom"] = country_exports.united_kingdom
    results_dict["united_states"] =  country_exports.united_states
    exports_results.append(results_dict)

country_growth = Base.classes.total_country_growth
session = Session(engine)

country_growth_query = session.query(country_growth.indicator_type, country_growth.year, country_growth.canada, country_growth.china, 
country_growth.france, country_growth.germany, country_growth.italy, country_growth.japan, country_growth.united_kingdom, 
country_growth.united_states).all()
session.close()

growth_results = []
for country_growth.indicator_type, country_growth.year, country_growth.canada, country_growth.china, country_growth.france, country_growth.germany, country_growth.italy, country_growth.japan, country_growth.united_kingdom, country_growth.united_states in country_growth_query:
    results_dict = {}
    results_dict["indicator"] = country_growth.indicator_type
    results_dict["year"] = country_growth.year
    results_dict["canada"] = country_growth.canada
    results_dict["china"] =  country_growth.china
    results_dict["france"] = country_growth.france
    results_dict["germany"] = country_growth.germany
    results_dict["italy"] = country_growth.italy
    results_dict["japan"] =  country_growth.japan
    results_dict["united_kingdom"] = country_growth.united_kingdom
    results_dict["united_states"] =  country_growth.united_states
    growth_results.append(results_dict)

trade_balance_total = Base.classes.trade_balance_total
session = Session(engine)

# trade_balance_query = session.query(trade_balance_total.indicator_type, trade_balance_total.year, trade_balance_total.canada, 
# trade_balance_total.china, trade_balance_total.france, trade_balance_total.germany, trade_balance_total.italy, 
# trade_balance_total.japan, trade_balance_total.united_kingdom, trade_balance_total.united_states).all()
# session.close()

# trade_balance_results = []
# for trade_balance_total.indicator_type, trade_balance_total.year, trade_balance_total.canada, trade_balance_total.china, trade_balance_total.france, trade_balance_total.germany, trade_balance_total.italy, trade_balance_total.japan, trade_balance_total.united_kingdom, trade_balance_total.united_states in trade_balance_query:
#     results_dict = {}
#     results_dict["indicator"] = trade_balance_total.indicator_type
#     results_dict["year"] = trade_balance_total.year
#     results_dict["canada"] = trade_balance_total.canada
#     results_dict["china"] =  trade_balance_total.china
#     results_dict["france"] = trade_balance_total.france
#     results_dict["germany"] = trade_balance_total.germany
#     results_dict["italy"] = trade_balance_total.italy
#     results_dict["japan"] =  trade_balance_total.japan
#     results_dict["united_kingdom"] = trade_balance_total.united_kingdom
#     results_dict["united_states"] =  trade_balance_total.united_states
#     trade_balance_results.append(results_dict)

@app.route("/")
def index():
    
    return ('Visit /api to see available API Routes.')

@app.route("/api")
def apiRoutes():
    return (
        "Available Routes:<br/>"
        "/api/imports_chart>"
        "/api/exports_chart>"
    )

@app.route("/gdp_chart")
def mapTotalGDP():

    return render_template('gdp.html', gdp_data=gdp_results)

# @app.route("/trade_balance_chart")
# def mapTradeBalance():

#     return render_template('trade_balance.html', trade_balance_data=trade_balance_results)

@app.route("/imports_chart")
def mapTotalImports():

    return render_template('imports.html', imports_data=imports_results)

@app.route("/exports_chart")
def mapTotalExports():
  
    return render_template('exports.html', exports_data=exports_results)

@app.route("/country_growth_chart")
def mapCountryGrowth():

    return render_template('country_growth.html', growth_data=growth_results)

if __name__ == "__main__":
    # Remove line before final deployment
    app.debug=True
    app.run()
