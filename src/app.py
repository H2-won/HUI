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

@app.route('/christmas')
def christmas():
    return render_template('christmas.html')

@app.route('/horizontal')
def horizontal():
    return render_template('horizontalPage.html')

@app.route('/3dParallax')
def threedParallax():
    return render_template('3dParallax.html')

@app.route('/glassMorphism')
def glassMorphism():
    return render_template('glassMorphism.html')

@app.route('/cursorEffect')
def cursorEffect():
    return render_template('cursorEffect.html')

@app.route('/wave')
def wave():
    return render_template('wave.html')

@app.route('/textLoading')
def textLoading():
    return render_template('textLoading.html')


### 실행
if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port='5000')