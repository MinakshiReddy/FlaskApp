from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def main():
    return render_template('home.html')

@app.route("/extras")
def extras():
    return render_template('extras.html')

@app.route("/signup")
def signup():
    return render_template('signup.html')

@app.route("/login")
def login():
    return render_template('signup.html')

@app.route("/faq")
def faq():
    return render_template('faq.html')

if __name__ == "__main__":
    app.run()