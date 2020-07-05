import sqlalchemy
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template
from sqlalchemy.schema import MetaData
import pandas as pd 


app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql://postgres:password@localhost/trade'
db = SQLAlchemy(app)
Base = automap_base()
#engine = create_engine('postgresql://postgres:password@localhost/trade')
#Base.metadata.create_all(engine)
#session = Session(bind=engine)
Base.prepare(db.engine, reflect=True)
Base.classes.keys()
trade_t = Base.classes.trade_table
#session = Session(engine)
trade_query = db.session.query(trade_t.reporter_name, trade_t._year, trade_t.trade_flow, trade_t.product_group, trade_t.trade_indicator, trade_t.total_dollars, trade_t.total_perc).all()
db.session.close()
trade_results = []
for trade_t.reporter_name, trade_t._year, trade_t.trade_flow, trade_t.product_group, trade_t.indicator, trade_t.total_dollars, trade_t.total_perc in trade_query:
    results_dict = {}
    results_dict["reporter_name"] = trade_t.reporter_name
    results_dict["year"] = trade_t._year
    results_dict["trade_flow"] = trade_t.trade_flow
    results_dict["product_group"] = trade_t.product_group
    results_dict["indicator"] = trade_t.indicator
    results_dict["total_dollars"] = trade_t.total_dollars
    results_dict["total_percent"] = trade_t.total_perc
    trade_results.append(results_dict)


@app.route("/")
def index():

    return "Visit /doughnut to see the chart."

    #return render_template('index.html', data=trade_data)

@app.route("/doughnut")
def mapImportData():
    

    return render_template('index.html', data=trade_results)

if __name__ == "__main__":
    # Remove line before final deployment
    #trade_data = mapImportData()
    #import_data = mapImportData()
    #tradePercentData = getTradePercent()
    #print(tradePercentData)
    app.debug=True
    app.run()
