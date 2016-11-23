#!/usr/local/bin/python
# -*- coding: utf-8 -*-
from flask import Flask,request,jsonify
from pyswip import Prolog
from flask.ext.cors import CORS, cross_origin
import json
import time
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/simple', methods=['POST'])
@cross_origin()
def get_simple_result():
    SUB_DIS = request.json['sub_district']
    DISRICT = request.json['district'].encode('utf-8')
    PROVINCE = request.json['province'].encode('utf-8')
    prolog = Prolog()
    prolog.consult('src/engine.pl')
    rule = "rules:simpleRule(Rice,RiceType,"+SUB_DIS+","+DISRICT+","+PROVINCE+",Price,SellPlace,Humidity,HarvestingSeason,Yield,PhotoPeroid)"
    re_list = list(prolog.query(rule))
    return jsonify(re_list)

@app.route('/yeild', methods=['POST'])
@cross_origin()
def get_best_yeild():
    SubDistrict = request.json['sub_district']
    CurrentMonth = time.localtime(time.time()).tm_mon
    prolog = Prolog()
    prolog.consult('src/engine.pl')
    rule = "bestYieldRice(Rice, RiceType,"+SubDistrict+", BestYield, PhotoPeriod, HarvestingSeason, "+str(CurrentMonth)+")"
    re_list = list(prolog.query(rule))
    return jsonify(re_list)

@app.route('/price', methods=['POST'])
@cross_origin()
def get_best_price():
    SubDistrict = request.json['sub_district']
    CurrentMonth = time.localtime(time.time()).tm_mon
    prolog = Prolog()
    prolog.consult('src/engine.pl')
    rule = "bestPriceRice(Rice, RiceType, SellPlace, "+SubDistrict+", Humidity, Price, PhotoPeriod, HarvestingSeason, "+str(CurrentMonth)+")"
    re_list = list(prolog.query(rule))
    return jsonify(re_list)

@app.route('/complex', methods=['POST'])
@cross_origin()
def get_expert_rule():
    Rice = request.json['Rice']
    RiceType = request.json['RiceType']
    SubDis = request.json['SubDis']
    Disrict = request.json['Disrict']
    Province = request.json['Province']
    Price = request.json['Price']
    SellPlace = request.json['SellPlace']
    Humidity = request.json['Humidity']
    Season = request.json['Season']
    PhotoPeriod = request.json['PhotoPeriod']
    Thrips = request.json['Thrips']
    Mealybug = request.json['Mealybug']
    BrownPlantHopper = request.json['BrownPlantHopper']
    WhiteBackedPlantHopper = request.json['WhiteBackedPlantHopper']
    ZigzagLeafHopper = request.json['ZigzagLeafHopper']
    GreenRiceLeafHopper = request.json['GreenRiceLeafHopper']
    RiceHispa = request.json['RiceHispa']
    StemBorer = request.json['StemBorer']
    CutWorm = request.json['CutWorm']
    RiceEarCuttingCaterpilla = request.json['RiceEarCuttingCaterpilla']
    RiceLeafFolder = request.json['RiceLeafFolder']
    RiceCaseWorm = request.json['RiceCaseWorm']
    RiceWhorlMaggot = request.json['RiceWhorlMaggot']
    RiceBlackBug = request.json['RiceBlackBug']
    RiceGallMidge = request.json['RiceGallMidge']
    RiceBug = request.json['RiceBug']
    SeedlingRotInNurseyBox = request.json['SeedlingRotInNurseyBox']
    SheathRot = request.json['SheathRot']
    SheathBlight = request.json['SheathBlight']
    BacterialLeafBlight = request.json['BacterialLeafBlight']
    GrassyStunt = request.json['GrassyStunt']
    FalseSmut = request.json['FalseSmut']
    Bakanae = request.json['Bakanae']
    BacterialLeafStreak = request.json['BacterialLeafStreak']
    NarrowBrownSpot = request.json['NarrowBrownSpot']
    BrownSpot = request.json['BrownSpot']
    RedStripe = request.json['RedStripe']
    LeafScald = request.json['LeafScald']
    RiceTungro = request.json['RiceTungro']
    OrangeLeaf = request.json['OrangeLeaf']
    RiceRaggedStunt = request.json['RiceRaggedStunt']
    DirtyPanicle = request.json['DirtyPanicle']
    Akiochi = request.json['Akiochi']
    RootKnot = request.json['RootKnot']
    StemRot = request.json['StemRot']
    GallDwarf = request.json['GallDwarf']
    YellowDwarf = request.json['YellowDwarf']
    RiceBlast = request.json['RiceBlast']
    prolog = Prolog()
    prolog.consult('src/engine.pl')
    rule = 'expertRule('+Rice+','+RiceType+','+SubDis+','+Disrict+','+Province+','+Price+','+SellPlace+','+Humidity
    rule = rule+','+Season+','+PhotoPeriod+','+Thrips+','+Mealybug+','+BrownPlantHopper+','+WhiteBackedPlantHopper
    rule = rule+','+ZigzagLeafHopper+','+GreenRiceLeafHopper+','+RiceHispa+','+StemBorer+','+CutWorm+','
    rule = rule+RiceEarCuttingCaterpilla+','+RiceLeafFolder+','+RiceCaseWorm+','+RiceWhorlMaggot+','
    rule = rule+RiceBlackBug+','+RiceGallMidge+','+RiceBug+','+SeedlingRotInNurseyBox+','+SheathRot+','+SheathBlight
    rule = rule+','+BacterialLeafBlight+','+GrassyStunt+','+FalseSmut+','+Bakanae+','+BacterialLeafStreak+','
    rule = rule+NarrowBrownSpot+','+BrownSpot+','+RedStripe+','+LeafScald+','+RiceTungro+','+OrangeLeaf+','
    rule = rule+RiceRaggedStunt+','+DirtyPanicle+','+Akiochi+','+RootKnot+','+StemRot+','+GallDwarf+','
    rule = rule+YellowDwarf+','+RiceBlast+')'
    re_list = list(prolog.query(rule))
    return jsonify(re_list)

@app.route('/ricefact/', methods=['POST'])
@cross_origin()
def create_rice_rule():

    rule = 'rice(%s).'%(request.json['rice'])
    target = open('src/rice_fact.pl','r')
    reader = target.read().splitlines()
    target.close()
    print(reader)
    output = open('src/rice_fact.pl','a')
    if rule in reader :
        print('alredy')
        print(rule)
        return "not_success"
    else :
        output.write(rule+"\n")
    return "success"

if __name__ == '__main__':
    app.run('0.0.0.0',9999)
