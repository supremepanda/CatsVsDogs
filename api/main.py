from flask import Flask, request, jsonify
from flask_cors import CORS
import predict

app = Flask(__name__, static_folder='build', static_url_path='')
CORS(app)

# Getting the predict result from API
@app.route("/api/predict-image", methods=['POST'])
def predictImage():
	file = request.files['image']
	response = jsonify({ "type": predict.predict(file) })

	return response

if __name__ == '__main__':
    app.run(host="0.0.0.0", threaded=True, port=5000)