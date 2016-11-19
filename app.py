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
def get_simple_result():
    SUB_DIS = request.json['sub_district']
    DISRICT = request.json['district'].encode('utf-8')
    PROVINCE = request.json['province'].encode('utf-8')
    prolog = Prolog()
    prolog.consult('src/engine.pl')
    rule = "rules:simpleRule(Rice,RiceType,"+SUB_DIS+","+DISRICT+","+PROVINCE+",Price,SellPlace,Humidity,Season,Yield,PhotoPeroid)"
    re_list = list(prolog.query(rule))
    return jsonify(re_list)

@app.route('/', methods=['POST'])
@cross_origin()
def get_expert_rule():
    '''expertRule(Rice,RiceType,SubDis,Disrict,Province,Price,SellPlace,Humidity,Season,PhotoPeriod,Thrips,Mealybug,BrownPlantHopper,WhiteBackedPlantHopper,ZigzagLeafHopper,
    GreenRiceLeafHopper,RiceHispa,StemBorer,CutWorm,RiceEarCuttingCaterpilla,RiceLeafFolder,RiceCaseWorm,RiceWhorlMaggot,RiceBlackBug,RiceGallMidge,RiceBug,
    SeedlingRotInNurseyBox,SheathRot,SheathBlight,BacterialLeafBlight,GrassyStunt,FalseSmut,Bakanae,BacterialLeafStreak,NarrowBrownSpot,BrownSpot,RedStripe,LeafScald,RiceTungro,
    OrangeLeaf,RiceRaggedStunt,DirtyPanicle,Akiochi,RootKnot,StemRot,GallDwarf,YellowDwarf,RiceBlast)'''
    return "TBA"

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
