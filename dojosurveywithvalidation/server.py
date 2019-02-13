from flask import Flask, render_template, request, redirect, flash, session
from mysqlconnection import connectToMySQL
app = Flask(__name__)
app.secret_key = "jazzy11"


@app.route('/')
def index():
    return render_template('survey.html')


@app.route("/addsubmission", methods=["POST"])
def addsubmission():
    print("about to do validations*****************************")

    if len(request.form['username']) < 5:
        flash("Please enter your full name")
        return redirect('/')

    print("about to do query*****************************")
    query = "INSERT INTO submission (fullname, dojolocation, favlanguage, comment) VALUES (%(ufn)s, %(udojo)s, %(ufavlan)s,  %(ucomm)s);"
    data = {
        "ufn": request.form["username"],
        "udojo": request.form["dojolocation"],
        "ufavlan": request.form["favoritelan"],
        "ucomm": request.form["comment"],
    }
    print(data)
    mysql = connectToMySQL('dojosurvey')
    submissions = mysql.query_db(query, data)
    print(request.form)
    return redirect('/results')


@app.route('/results')
def results():
    mysql = connectToMySQL("dojosurvey")
    query = "SELECT * FROM submission;"
    submissions = mysql.query_db(query)
    print(submissions)
    return render_template('/results.html', submission=submissions)


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.


# Mai notes:  this required a sesion key, session, and also be very careful with your HTML, as the flash can offset your tables.  