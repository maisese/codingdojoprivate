from flask import Flask, render_template, request, redirect
from mysqlconnection import connectToMySQL    # import the function that will return an instance of a connection
app = Flask(__name__)
@app.route("/")

def index():
    mysql = connectToMySQL("crpets")
    pets = mysql.query_db("SELECT * FROM pets;")
    print(pets)
    return render_template("index.html", allpets = pets)


@app.route("/newpet", methods=["POST"])
def add_pet_to_db():
    print(request.form)
    query = "INSERT INTO pets (name, type, created_at, updated_at) VALUES (%(pn)s, %(ty)s, NOW(), NOW());"
    data = {
        "pn": request.form["pname"],
        "ty": request.form["ptype"],
    }
    mysql = connectToMySQL('crpets')
    mysql.query_db(query, data)
    return redirect("/")
     
if __name__ == "__main__":
    app.run(debug=True)