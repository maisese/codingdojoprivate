from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL 
app = Flask(__name__)    
 

@app.route('/')
def index():
    return render_template('survey.html')

@app.route("/addsubmission", methods=["POST"])
def addsubmission():
    print(request.form)
    print(f"fullname submitted: {request.form['username']}")
    print(f"dojo submitted: {request.form['dojolocation']}")
    print(f"favoritelanguage submitted: {request.form['favoritelan']}")
    print(f"comment submitted: {request.form['comment']}")
    return render_template("results.html", name=request.form['username'], location = request.form['dojolocation'],fav=request.form['favoritelan'], comm=request.form['comment'])

@app.route('/results')
def results():
    mysql = connectToMySQL("dojosurvey")
    query = "SELECT * FROM users;"
    submissions = mysql.query_db(query)
    print(mysql.query_db)
    return render_template('/results.html', submission=submissions)

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.
