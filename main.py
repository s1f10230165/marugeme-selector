from flask import Flask, render_template, request

app = Flask(__name__)

# カートの初期化
cart = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add_to_cart', methods=['POST'])
def add_to_cart():
    item = request.form['item']
    cart.append(item)
    return render_template('cart.html', cart=cart)

@app.route('/remove_from_cart', methods=['POST'])
def remove_from_cart():
    item = request.form['item']
    if item in cart:
        cart.remove(item)
    return render_template('cart.html', cart=cart)

if __name__ == '__main__':
    app.run(debug=True)
