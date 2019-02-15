from flask import Flask, request,render_template, redirect, flash, session
from mysqlconnection import connectToMySQL

from flask_bcrypt import Bcrypt

import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
NAME_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+$')
PASSWORD_REGEX =  re.compile(r'^(?!^[0-9]*$)(?!^[A-Z]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})+$')


app = Flask(__name__)    
bcrypt = Bcrypt(app) 
app.secret_key = "jazzy11"

# localhost:5000/ 
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/validatRegistration', methods=['POST'])
def validatRegistration():
    print('*****starting validating information****')
    isValid = True

    if len(request.form['first_name']) < 2:
        isValid = False
        flash("Please enter your first name", 'firstname')

    if not NAME_REGEX.match(request.form['first_name']):
        isValid = False
        flash("Please enter your first name", 'firstname')

    if len(request.form['last_name']) < 2:
        isValid = False
        flash("Please enter your last name", 'lastname')
    
    if not EMAIL_REGEX.match(request.form['email']):
        isValid = False
        flash("Re-enter a valid email.", 'email')
    
    if not PASSWORD_REGEX.match(request.form['password']):
        isValid = False
        flash("The password must be alphanumeric with at least one number, one capital letter, and be between 6-15 characters in length.", 'password')

    if ((request.form['password2']) != request.form['password']):
        isValid = False
        flash("Password entry must match.  Re-enter password.", 'password2')
    
    if isValid == False:
        return redirect('/') 
    
    if isValid == True:
    
        pw_hash = bcrypt.generate_password_hash(request.form['password'])  
        print(pw_hash) 

        print('*****start query and data****')
        query = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (%(ufn)s, %(uln)s, %(email)s, %(password_hash)s, NOW(), NOW());"
        data = {
            "ufn": request.form['first_name'],
            "uln": request.form['last_name'],
            "email": request.form['email'],
            "password_hash": pw_hash
        }
        print('*****your data that is being inserted*****')
        mysql = connectToMySQL('loginregistration')
        successusers = mysql.query_db(query, data)
        session['id'] = successusers
        print('****************', successusers)
    return redirect('/success')

@app.route('/login', methods=['POST'])
def login():
    mysql = connectToMySQL("loginregistration")
    query = "SELECT * FROM users WHERE email = %(email)s;"
    data = { "email" : request.form["email"] }
    result = mysql.query_db(query, data)
    if result:
        if bcrypt.check_password_hash(result[0]['password'], request.form['password']):
           #sesion option below
            session['id'] = result[0]['id']
            # never render on a post, always redirect!
            return redirect('/success')
    #Error message below when email and pw do not match
    flash("You could not be logged in.  Email and password do not match.", 'login')
    return redirect("/")


@app.route('/success')
def success():
    id = session['id']
    mysql = connectToMySQL("loginregistration")
    query = "SELECT * FROM users WHERE id= %(id)s;"
    data = {
        "id" : id
    }
    successUSERS = mysql.query_db(query, data)
    print(successUSERS)
    flash("You are logged in.")
    return render_template('/success.html', sucessfulUsers=successUSERS)

@app.route('/sign_out')
def sign_out():
    session.clear()
    flash("You are logged out.  Have a great day!", 'logout')
    return redirect('/') 
    


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

