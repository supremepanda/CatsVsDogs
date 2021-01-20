from flask import Flask, request
from flask_cors import CORS

import sys
sys.path.insert(1, 'backend')

import predict

app = Flask(__name__)
CORS(app)

@app.route("/api/predict-image", methods=['POST'])
def predictImage():
	file = request.files['image']
	response = { "type": predict.predict(file) }

	return response

