from flask import Flask, request, render_template, redirect, session,flash
from mysqlconnection import connectToMySQL
import re

app = Flask(__name__)
app.secret_key = "jazzy11"

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

# localhost:5000/
@app.route('/')
def index():
    return render_template('index.html')


@app.route('/validatemail', methods=['POST'])
def validateemail():
    print('*****starting validating email function****')

    
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Email is not valid!")
        return redirect('/')

    if EMAIL_REGEX.match(request.form['email']):
        flash("Email is valid and added to the database! Thank you.")
        return redirect("/success") 

    print('*****start query and data****')
    query = "INSERT INTO emails (email, created_at) VALUES (%(em)s, NOW());"
    data = {
        "em": request.form['email']
    }
    print('*****your data that is being inserted*****')
    mysql = connectToMySQL('emailvalidation')
    emailz = mysql.query_db(query, data)
    print(request.form)
    return redirect('/success')


@app.route('/success')
def sucess():
    mysql = connectToMySQL("emailvalidation")
    query = "SELECT * FROM emails;"
    emailz = mysql.query_db(query)
    print(emailz)
    return render_template('/success.html', snails=emailz)

# watch out for naming your dictionary, be sure to name it something opposite, and not too similar, snails here is now your dictionary and needs to match to the otherside


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
