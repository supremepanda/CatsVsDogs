from flask import Flask, request
from flask_cors import CORS

import sys
sys.path.insert(1, 'back_end/project')

import predict

app = Flask(__name__)
CORS(app)

@app.route("/api/predict-image", methods=['POST'])
def predictImage():
	file = request.files['image']
	response = { "message": "test" }

	return response

#print(predict.predict('back_end\cat2.jpg'))
