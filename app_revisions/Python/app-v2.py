import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify, render_template
from sqlalchemy.schema import MetaData
import pandas as pd 


app = Flask(__name__)


Base = automap_base()
engine = create_engine('postgresql://postgres:password@localhost/trade')
#Base.metadata.create_all(engine)
session = Session(bind=engine)
Base.prepare(engine, reflect=True)
Base.classes.keys()

@app.route("/")
def index():

    #return "Visit /api to see available API Routes."

    return render_template('index.html', data=import_data)

def mapImportData():
    ImpDol = Base.classes.import_dollars
    session = Session(engine)

    imp_query = session.query(ImpDol.reporter_name, ImpDol.partner_name, ImpDol.product_group, ImpDol._indicator, ImpDol.y_2013, ImpDol.y_2014,ImpDol.y_2015,ImpDol.y_2016,ImpDol.y_2017,ImpDol.y_2018).all()
    session.close()

    all_results = []
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
        all_results.append(results_dict)

    return(all_results)



if __name__ == "__main__":
    # Remove line before final deployment
    
    import_data = mapImportData()
    #print(import_data)
    app.debug=True
    app.run()
