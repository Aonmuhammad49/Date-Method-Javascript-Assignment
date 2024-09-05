//1. Write a program that displays current date and time in
//your browser
document.write("<div style='border: 2px solid blue; text-align: center;  left: 50%; margin: auto; Width: 800px; height: 50px;font-size: 30px; '>")
var today = new Date()
document.write(today)
document.write("</div>")
document.write("<br/>")
//2. Write a program that alerts the current month in words.
//For example December.
document.write("<div style='border: 2px solid blue;  left: 50%; text-align: center; margin: auto; Width: 400px; height: 40px;font-size: 30px; '>")
var monthname = today.getMonth()
var arr = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"]
document.write("Current Month: "+arr[monthname])
document.write("</div>")
document.write("<br/>")
//3. Write a program that alerts the first 3 letters of the current
//day, for example if today is Sunday then alert will show 
//Sun
document.write("<div style='border: 2px solid blue;  left: 50%; text-align: center; margin: auto; Width: 400px; height: 40px;font-size: 30px; '>")
var day = today.getDay()
var arr = ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"]
document.write("Today is "+arr[day])
document.write("</div>")
document.write("<br/>")
//4. Write a program that displays a message “It’s Fun day” if 
//its Saturday or Sunday today.
document.write("<div style='border: 2px solid blue;  left: 50%; text-align: center; margin: auto; Width: 300px; height: 30px;font-size: 30px; padding: 10px 5px;'>")
var date = new Date()
var funday =date.getDay()
if(funday == 0 || funday == 6){
    document.write("<h1>Its Funday</h1>");
}
else{
    document.write("Its Working day")
}
document.write("</div>")
document.write("<br>")
//5. Write a program that shows the message “First fifteen 
//days of the month” if the date is less than 16th of the month 
//else shows “Last days of the month”
document.write("<div style='border: 2px solid blue;  left: 50%; text-align: center; margin: auto; Width: 500px; height: 30px;font-size: 30px; padding: 10px 5px;'>")
var Current = new Date()
var day = Current.getDate()
if(day<=15){
    document.write("first fifteen days of the month")
}
else{
    document.write("Last day of month")
}
document.write("</div>")
//Assignemnet end//