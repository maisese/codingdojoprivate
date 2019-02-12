from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL 
app = Flask(__name__)    

# localhost:5000/ 

@app.route('/')
def index():
    mysql = connectToMySQL("flaskusers")
    users = mysql.query_db("SELECT * FROM users;")
    print(users)
    return render_template("users.html", users = users)

@app.route('/add.html')
def add():
    return render_template("add.html")

@app.route("/adduser", methods=["POST"])
def adduser():
    query = "INSERT INTO users (full_name, email, created_at, updated_at, description) VALUES (%(ufn)s, %(uem)s, NOW(), NOW(), %(udes)s);"
    data = {
        "ufn": request.form["userfullname"],
        "uem": request.form["useremail"],
        "udes": request.form["userdescription"],
    }
    mysql = connectToMySQL('flaskusers')
    mysql.query_db(query, data)
    print(request.form)
    return redirect('/')

@app.route("/show/<id>")
def show(id):
    mysql = connectToMySQL("flaskusers")
    data = {
        "id": id,
    }
    query = "SELECT * FROM users where id = %(id)s;"
    users = mysql.query_db(query, data)
    print(mysql.query_db)
    return render_template("show.html", user=users)

@app.route("/edit/<id>") 
def edit(id):
    mysql = connectToMySQL("flaskusers")
    query = "SELECT * FROM users where id = %(id)s"
    data = {
        "id": id,
    }
    users = mysql.query_db(query, data)
    print(mysql.query_db)
    return render_template("edit.html", user=users)

@app.route("/update/<id>", methods=["POST"])
def update(id):
    query = "UPDATE users SET full_name =%(uufn)s, email=%(uuem)s, updated_at = NOW(), description=%(uudes)s WHERE id ="+id
    data = {
        "uufn": request.form["userfullname"],
        "uuem": request.form["useremail"],
        "uudes": request.form["userdescription"],
    }
    mysql = connectToMySQL('flaskusers')
    users = mysql.query_db(query, data)
    print(mysql.query_db)
    return redirect("/show/"+ id)

@app.route("/delete/<id>")
def delete(id):
    query = "DELETE from users WHERE id =" +id
    mysql = connectToMySQL('flaskusers')
    mysql.query_db(query)
    print(request.form)
    return redirect('/')

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

