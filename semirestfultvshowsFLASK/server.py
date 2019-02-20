from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL 
app = Flask(__name__)    

# localhost:5000/ 

@app.route('/')
def index():
    mysql = connectToMySQL("semitvshows")
    QUERYtheSHOWS = mysql.query_db("SELECT * FROM tvshows;")
    print("8"*80, QUERYtheSHOWS)
    return render_template("index.html", alltheshows = QUERYtheSHOWS)

@app.route('/new')
def add():
    return render_template("add.html")

@app.route("/shows/create", methods=["POST"])
def adduser():
    mysql = connectToMySQL('semitvshows')
    query = "INSERT INTO tvshows (title, network, release_date,created_at, updated_at, description) VALUES (%(tite)s, %(network)s, %(releasedate)s, NOW(), NOW(), %(description)s);"
    data = {
        "tite": request.form["title"],
        "network": request.form["network"],
        "releasedate": request.form["releasedate"],
        "description": request.form["description"],
    }
    ADDEDshows = mysql.query_db(query, data)
    print("*"*80, ADDEDshows)
    return redirect('/')

@app.route("/show/<id>")
def show(id):
    mysql = connectToMySQL("semitvshows")
    data = {
        "id": id,
    }
    query = "SELECT * FROM tvshows where id = %(id)s;"
    showTHEshows = mysql.query_db(query, data)
    print(mysql.query_db)
    return render_template("show.html", tvshows=showTHEshows)

@app.route("/edit/<id>") 
def edit(id):
    mysql = connectToMySQL("semitvshows")
    query = "SELECT * FROM tvshows where id = %(id)s"
    data = {
        "id": id,
    }
    EDITTEDshow = mysql.query_db(query, data)
    print(mysql.query_db)
    return render_template("edit.html", tvshows=EDITTEDshow)

@app.route("/update/<id>", methods=["POST"])
def update(id):
    query = "UPDATE tvshows SET title=%(title)s, network=%(network)s, release_date=%(releasedate)s updated_at = NOW(), description=%(description)s WHERE id ="+id
    data = {
        "title": request.form["title"],
        "network": request.form["network"],
        "releasedate": request.form["releasedate"],
        "description": request.form["description"],
    }
    mysql = connectToMySQL('semitvshows')
    UPDATEDshows = mysql.query_db(query, data)
    print("^"*80, UPDATEDshows)
    return redirect("/show/"+ id)

@app.route("/delete/<id>")
def delete(id):
    query = "DELETE from tvshows WHERE id =" +id
    mysql = connectToMySQL('semitvshows')
    mysql.query_db(query)
    print(request.form)
    return redirect('/')

if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

