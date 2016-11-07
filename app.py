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
    # print ( province)
    # data_string = json.dumps(data_req_2)+"\r\n" #data serialized
    print('p',province.encode('utf8'),'\n')
    prolog = Prolog()
    prolog.consult('src/engine.pl')
    re_list = list(prolog.query('province_region_fact:has_region('+province+',Region)'))
    print(re_list)
    # return jsonify(re_list)
    return "Hello"

if __name__ == '__main__':
    app.run('0.0.0.0',9999)
