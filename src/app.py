from flask import *

app = Flask(__name__, instance_relative_config=True)

@app.route('/')
def home():
   return render_template('main.html')

@app.route('/rocket')
def rocket():
   return render_template('rocket.html')

@app.route('/parallax')
def parallax():
   return render_template('parallax.html')

@app.route('/clipPath')
def clipPath():
   return render_template('clipPath.html')

@app.route('/light')
def light():
   return render_template('light.html')

### 실행
if __name__ == '__main__':
	app.run(host='0.0.0.0', debug=True, port='5000')