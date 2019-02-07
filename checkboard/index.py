from flask import Flask, render_template
app = Flask(__name__)    

@app.route('/')          
def showboxes1():
    mnum = int(4)
    return render_template('index.html', showboxes=mnum)

@app.route('/<num>')          
def showboxes(num):
    snum = int(num)
    return render_template('index.html', showboxes=snum)

#previously in file
if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.