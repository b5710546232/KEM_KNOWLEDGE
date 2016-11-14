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


@app.route('/simplerule/', methods=['POST'])
@cross_origin()
def get_simple_result():
    # simpleRule(Rice,RiceType,SubDis,Disrict,Province,Price,SellPlace,Humidity,Season) :-
    print()
    print(request.json['province'])
    print()
    RICE = 'RICE'
    RICE_TYPE = 'RICE_TYPE'
    # SPECIAL_CASE = '_'
    SUB_DIS = '_'
    DISRICT = '_'
    # SUB_DIS = request.json['sub_dis']
    # DISRICT = request.json['disrict']
    PROVINCE = request.json['province']
    PRICE = 'PRICE'
    SELL_PLACE = 'SELL_PLACE'
    HUMIDITY = 'HUMIDITY'
    SEASON = 'SEASON'
    prolog = Prolog()
    prolog.consult('src/engine.pl')
    rule = "simpleRule(%s,%s,%s,%s,%s,%s,%s,%s,%s)."%(RICE,RICE_TYPE,SUB_DIS,DISRICT,PROVINCE,PRICE,SELL_PLACE,HUMIDITY,SEASON)
    re_list = list(prolog.query(rule))
    print(rule)
    return jsonify(re_list)
    # return "Hello"
    #
@app.route('/ricefact/', methods=['POST'])
@cross_origin()
def create_rice_rule():
    # simpleRule(Rice,RiceType,SubDis,Disrict,Province,Price,SellPlace,Humidity,Season) :-
    target = open('src/rice_fact','w+')
    rule = '\nrice(%s).'&(request.json['rice'])
    target.write(rule)
    print(rule)
    return "ok"
    # return "Hello"

if __name__ == '__main__':
    app.run('0.0.0.0',9999)
