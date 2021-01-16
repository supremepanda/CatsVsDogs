from flask import Flask

app = Flask(__name__)

@app.route("/api/test")
def test():
	response = { "message": "hi" }

	return response