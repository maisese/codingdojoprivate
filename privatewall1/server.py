from flask import Flask, request,render_template, redirect, flash, session
from mysqlconnection import connectToMySQL
from datetime import datetime
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

    print ('8'*200, 'see if email is in the system')
    mysql = connectToMySQL("privatewall")
    query = "SELECT * FROM users WHERE email = %(email)s;"
    data = { "email" : request.form["email"] }
    doesmailexist = mysql.query_db(query, data)
    print('*' *100, doesmailexist)
    
    if doesmailexist:
        isValid = False
        flash("Email already exists in the system.  Please enter unique email.", 'email')
        print('^'*100, 'if email found in database')
    
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
        mysql = connectToMySQL('privatewall')
        successusers = mysql.query_db(query, data)
        session['id'] = successusers
        print('**************************', successusers)
    return redirect('/success')

@app.route('/login', methods=['POST'])
def login():
    mysql = connectToMySQL("privatewall")
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

@app.route('/send', methods=['POST'])
def send():
    id = session['id']
    mysql = connectToMySQL("privatewall")
    query = "INSERT INTO messages (message, created_at, users_id, recipient_id) VALUES (%(message)s, NOW(), %(id)s, %(friendid)s);"
    data = {
        "message" : request.form['message'],
        "friendid": request.form['toid'],
        "id" : id,
    }
    messagebeingPASSED = mysql.query_db(query, data)
    print("FSFDSFDSFSDFDSF@#@#!@#!@#@#!@#", messagebeingPASSED)
    flash("You sucessfully sent.")
    return redirect('/success') 

@app.route('/success')
def success():
    id = session['id']
    mysql = connectToMySQL("privatewall")
    query = "SELECT users.id, users.first_name as reciever, messages.id as messages_id, messages.message, messages.created_at, senders.id as sender_id, senders.first_name as sender FROM users JOIN messages ON messages.recipient_id = users.id JOIN users as senders ON senders.id = messages.users_id WHERE users.id  = %(id)s ORDER by messages.id DESC;" 
    data = {
        "id" : id
    }
    passingUSERS = mysql.query_db(query, data)
    print("FSFDSFDSFSDFDSF@#@#!@#!@#@#!@#", passingUSERS)

    print('*****FIRSTNAME TEST*********')
    mysql = connectToMySQL("privatewall")
    query = "SELECT id, first_name FROM users WHERE id = %(id)s;" 
    userFirstNAMEpass = mysql.query_db(query, data)
    print("#$#$#$#$#$#@$#@$#@$#@$#@", userFirstNAMEpass)

    print('*****FRIENDS FIRST NAME *********')
    mysql = connectToMySQL("privatewall")
    query = "SELECT id, first_name  FROM users WHERE id !=  %(id)s ORDER BY first_name ASC;" 
    friendsFirstname = mysql.query_db(query, data)
    print("^%^^%$^%$^$%^", friendsFirstname)

    print('*****HOW MANY MESSAGES SENT *********')
    mysql = connectToMySQL("privatewall")
    query = "SELECT message FROM messages where users_id =  %(id)s;" 
    howMANYmessages = mysql.query_db(query, data)
    print('483902483204832484', howMANYmessages )

    flash("You are logged in.")
    return render_template('/success.html', queryUsers=passingUSERS, FirstNAMEpass=userFirstNAMEpass,friendsBASE=friendsFirstname, countSENT=howMANYmessages)

@app.route('/sign_out')
def sign_out():
    session.clear()
    flash("You are logged out.  Have a great day!", 'logout')
    return redirect('/') 

@app.route("/delete/<id>")
def delete(id):
    query = "DELETE from messages WHERE id =" +id
    mysql = connectToMySQL('privatewall')
    mysql.query_db(query)
    print('*'*80, 'deleted this messsage id', request.form)
    flash("Your message was deleted", 'messagedeleted')
    return redirect('/success')

#Expiremented with time filters from
@app.template_filter()
def friendly_time(dt, past_="ago", 
    future_="from now", 
    default="just now"):
    """
    Returns string representing "time since"
    or "time until" e.g.
    3 days ago, 5 hours from now etc.
    """
    #changed from UTC to datetime.now
    now = datetime.now()
    if now > dt:
        diff = now - dt
        dt_is_past = True
    else:
        diff = dt - now
        dt_is_past = False

    periods = (
        (diff.days / 365, "year", "years"),
        (diff.days / 30, "month", "months"),
        (diff.days / 7, "week", "weeks"),
        (diff.days, "day", "days"),
        (diff.seconds / 3600, "hour", "hours"),
        (diff.seconds / 60, "minute", "minutes"),
        (diff.seconds, "second", "seconds"),
    )

    for period, singular, plural in periods:
        
        if period:
            return "%d %s %s" % (period, \
                singular if period == 1 else plural, \
                past_ if dt_is_past else future_)

    return default




if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

