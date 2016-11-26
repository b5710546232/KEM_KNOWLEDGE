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
    # add Yield to rule.
    rule = "bestYieldRice(Rice, RiceType,"+SubDistrict+", BestYield, PhotoPeriod, HarvestingSeason, "+str(CurrentMonth)+",Yield)"
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

@app.route('/expert', methods=['POST'])
@cross_origin()
def get_expert_rule():
    Rice = 'Rice'
    # Rice = str(request.json[u'riceName'])
    # if Rice == '' :
    #     Rice = 'Rice'
    RiceType = str(request.json[u'riceType'])
    if RiceType == '' :
        RiceType = 'RiceType'
    SubDis = str(request.json[u'subDis'])
    if SubDis == '' :
        SubDis = 'SubDis'
    Disrict = str(request.json[u'district'])
    if Disrict == '' :
        Disrict = 'Disrict'
    Province = str(request.json[u'province'])
    if Province == '' :
        Province = 'Province'
    Price = str(request.json[u'price'])
    if Price == '' :
        Price = 'Price'
    SellPlace = str(request.json[u'sellPlace'])
    if SellPlace == '' :
        SellPlace = 'SellPlace'
    Humidity = str(request.json[u'humidity'])
    if Humidity == '' :
        Humidity = 'Humidity'
    Season = str(request.json[u'season'])
    if Season == '' :
        Season = 'Season'
    PhotoPeriod = str(request.json[u'photoPeriod'])
    if PhotoPeriod == '' :
        PhotoPeriod = 'PhotoPeriod'

    Thrips = 'Thrips'
    Mealybug = 'Mealybug'
    BrownPlantHopper = 'BrownPlantHopper'
    WhiteBackedPlantHopper = 'WhiteBackedPlantHopper'
    ZigzagLeafHopper = 'ZigzagLeafHopper'
    GreenRiceLeafHopper = 'GreenRiceLeafHopper'
    RiceHispa = 'RiceHispa'
    StemBorer = 'StemBorer'
    CutWorm = 'CutWorm'
    RiceEarCuttingCaterpilla = 'RiceEarCuttingCaterpilla'
    RiceLeafFolder = 'RiceLeafFolder'
    RiceCaseWorm = 'RiceCaseWorm'
    RiceWhorlMaggot = 'RiceWhorlMaggot'
    RiceBlackBug = 'RiceBlackBug'
    RiceGallMidge = 'RiceGallMidge'
    RiceBug = 'RiceBug'
    pestGroup = request.json[u'pestGroup']
    for i in pestGroup :
        if i == 'thrips' :
            Thrips = '"true"'
        elif i == 'mealybug' :
            Mealybug = '"true"'
        elif i == 'brownPlantHopper' :
            BrownPlantHopper = '"true"'
        elif i == 'whiteBackedPlantHopper' :
            WhiteBackedPlantHopper = '"true"'
        elif i == 'greenRiceLeafHopper' :
            GreenRiceLeafHopper = '"true"'
        elif i == 'riceHispa' :
            RiceHispa = '"true"'
        elif i == 'stemBorer' :
            StemBorer = '"true"'
        elif i == 'cutWorm' :
            CutWorm = '"true"'
        elif i == 'riceEarCuttingCaterpilla' :
            RiceEarCuttingCaterpilla = '"true"'
        elif i == 'riceLeafFolder' :
            RiceLeafFolder = '"true"'
        elif i == 'riceCaseWorm' :
            RiceCaseWorm = '"true"'
        elif i == 'riceWhorlMaggot' :
            RiceWhorlMaggot = '"true"'
        elif i == 'riceBlackBug' :
            RiceBlackBug = '"true"'
        elif i == 'riceGallMidge' :
            RiceGallMidge = '"true"'
        elif i == 'riceBug' :
            RiceBug = '"true"'

    SeedlingRotInNurseyBox = 'SeedlingRotInNurseyBox'
    SheathRot = 'SheathRot'
    SheathBlight = 'SheathBlight'
    BacterialLeafBlight = 'BacterialLeafBlight'
    GrassyStunt = 'GrassyStunt'
    FalseSmut = 'FalseSmut'
    Bakanae = 'Bakanae'
    BacterialLeafStreak = 'BacterialLeafStreak'
    NarrowBrownSpot = 'NarrowBrownSpot'
    BrownSpot = 'BrownSpot'
    RedStripe = 'RedStripe'
    LeafScald = 'LeafScald'
    RiceTungro ='RiceTungro'
    OrangeLeaf = 'OrangeLeaf'
    RiceRaggedStunt = 'RiceRaggedStunt'
    DirtyPanicle = 'DirtyPanicle'
    Akiochi = 'Akiochi'
    RootKnot = 'RootKnot'
    StemRot = 'StemRot'
    GallDwarf = 'GallDwarf'
    YellowDwarf = 'YellowDwarf'
    RiceBlast = 'RiceBlast'

    disceaseGroup = request.json[u'diseaseGroup']
    for i in pestGroup :
        if i == 'seedlingRotInNurseyBox' :
            SeedlingRotInNurseyBox = '"true"'
        elif i == 'sheathRot' :
            SheathRot = '"true"'
        elif i == 'sheathBlight' :
            SheathBlight = '"true"'
        elif i == 'bacterialLeafBlight' :
            BacterialLeafBlight = '"true"'
        elif i == 'grassyStunt' :
            GrassyStunt = '"true"'
        elif i == 'falseSmut' :
            FalseSmut = '"true"'
        elif i == 'bakanae' :
            Bakanae = '"true"'
        elif i == 'bacterialLeafStreak' :
            BacterialLeafStreak = '"true"'
        elif i == 'narrowBrownSpot' :
            NarrowBrownSpot = '"true"'
        elif i == 'brownSpot' :
            BrownSpot = '"true"'
        elif i == 'redStripe' :
            RedStripe = '"true"'
        elif i == 'leafScald' :
            LeafScald = '"true"'
        elif i == 'riceTungro' :
            RiceTungro ='"true"'
        elif i == 'orangeLeaf' :
            OrangeLeaf = '"true"'
        elif i == 'riceRaggedStunt' :
            RiceRaggedStunt = '"true"'
        elif i == 'dirtyPanicle' :
            DirtyPanicle = '"true"'
        elif i == 'akiochi' :
            Akiochi = '"true"'
        elif i == 'rootKnot' :
            RootKnot = '"true"'
        elif i == 'stemRot' :
            StemRot = '"true"'
        elif i == 'gallDwarf' :
            GallDwarf = '"true"'
        elif i == 'yellowDwarf' :
            YellowDwarf = '"true"'
        elif i == 'riceBlast' :
            RiceBlast = '"true"'
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
