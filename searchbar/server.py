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


@app.route('/register', methods=['POST'])
def register():
    print('*****starting validating information****')
    isValid = True
    
    if not EMAIL_REGEX.match(request.form['email']):
        isValid = False
        flash("Email is not valid!", 'email')
        return redirect('/')

    if ((request.form['password2']) != request.form['password']):
        isValid = False
        flash("Password entry must match.  Re-enter password.", 'password2')
    
    if isValid == False:
        return redirect('/') 
    
    if isValid == True:
            
            mysql = connectToMySQL('usernamevalidation')
            query = "INSERT INTO users (username, email, password) VALUES (%(un)s, %(em)s, %(pw)s);"
            data = {
                "un" : request.form['username'],    
                "em": request.form['email'],
                "pw": request.form['password'],
            }
            print('*****your data that is being inserted*****')
            
            passedinUSERS = mysql.query_db(query, data)
            print('8'*80, passedinUSERS)
            session['id'] = passedinUSERS
    return redirect('/success')

@app.route("/username", methods=['POST'])
def username():
    found = False
    mysql = connectToMySQL('usernamevalidation')        # connect to the database
    query = "SELECT username FROM users WHERE users.username = %(user)s;"
    data = { 'user': request.form['username'] }
    result = mysql.query_db(query, data)
    print('8'*80, result)
    if result:
        found = True
    return render_template('partials/username.html', found=found)  # render a partial and return it
    # Notice that we are rendering on a post! Why is it okay to render on a post in this scenario?
    # Consider what would happen if the user clicks refresh. Would the form be resubmitted?

@app.route('/success')
def sucess():
    id = session['id']
    mysql = connectToMySQL('usernamevalidation')
    query = "SELECT * FROM users WHERE users.id  = %(id)s;"
    data = {
        "id" : id
    }
    alltheUSERS = mysql.query_db(query,data)
    print(alltheUSERS)
    return render_template('/success.html', allusers=alltheUSERS)

# watch out for naming your dictionary, be sure to name it something opposite, and not too similar, snails here is now your dictionary and needs to match to the otherside


if __name__ == "__main__":   # Ensure this file is being run directly and not from a different module
    app.run(debug=True)    # Run the app in debug mode.
