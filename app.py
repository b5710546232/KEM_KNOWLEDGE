#!/usr/local/bin/python
# -*- coding: utf-8 -*-
from flask import Flask,request,jsonify
from pyswip import Prolog
from flask.ext.cors import CORS, cross_origin
import json
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['POST'])
@cross_origin()
def get_result():
    province = request.json['province']
    print ( province)
    prolog = Prolog()
    prolog.consult('src/engine.pl')
    re_list = list(prolog.query('myrule(Rice,'+province+',Price,Pro)'))
    return jsonify(re_list)

if __name__ == '__main__':
    app.run('0.0.0.0',9999)
