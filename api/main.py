from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/predict-image", methods=['POST'])
def predictImage():
	file = request.files['image']
	response = { "message": "test" }

	return response