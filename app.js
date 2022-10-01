// adding the express module 
const express = require('express');

// creating an instance of express 
const app = express();

const portNumber = 3000;

// using the get() method from the app instance to create a "/" root route for the app
app.get("/",function(req,res){
    
    console.log("The current directory path is:");
    // using the __dirname for getting the path where our current project directory is present
    console.log(__dirname);

    // using the send() method from the res instance for sending a response when the user makes
    // a request at "/" route
    // res.send("Home Page");

    // using the sendFile() method to send the index.html file to the user when the user hits
    // the "/" root route
    res.sendFile(__dirname + "/index.html");   // here we are using the __dirname variable from
    // node for getting the current directory path and concatinating the name of the file
    // that we have to send
});


// using the listen() method from app instance for creating a server to listen at port 3000
app.listen(portNumber, function(){
    console.log("The server is up and running at "+portNumber);
});