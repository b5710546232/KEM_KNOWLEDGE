# use python2 for run.
from flask import Flask,request,jsonify
from pyswip import Prolog
from flask.ext.cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['POST'])
@cross_origin()
def get_result():
    pass
    # request = request.json['something']
    # prolog = Prolog()
    # prolog.consult('src/engine.pl')
    # query_list = list(prolog.query(''))
    # result_list = []
    # return jsonify()

if __name__ == '__main__':
    app.run('0.0.0.0',9999)
