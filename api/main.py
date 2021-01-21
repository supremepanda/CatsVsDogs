from flask import Flask, request
from flask_cors import CORS

# It handles importing problem to import our local directory
import sys
sys.path.insert(1, 'backend')

import predict

app = Flask(__name__)
CORS(app)

# Getting the predict result from API
@app.route("/api/predict-image", methods=['POST'])
def predictImage():
	file = request.files['image']
	response = { "type": predict.predict(file) }

	return response
