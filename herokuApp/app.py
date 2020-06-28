from flask import Flask, jsonify, render_template
from flask_cors import CORS
import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.schema import MetaData

DB_URI = 'postgresql://postgres:0607@localhost/WITS'
engine = create_engine(DB_URI)
#postgresConnection = engine.connect()

meta = MetaData()
meta.reflect(bind=engine,views=True)

app = Flask(__name__)

@app.route("/")
def index():
    return "Visit /api to see available API Routes."

@app.route("/api")
def apiRoutes():
    return (
        "Available Routes:<br/>"
        "/api/mapData>"
    )

@app.route("/api/mapData")
def mapDataRoute():
    df = pd.read_sql("""
        SELECT *
        FROM glancemapdb
    """, engine)
    return df.to_json(orient='records')

if __name__ == "__main__":
    # Remove line before final deployment
    app.debug=True
    app.run()
