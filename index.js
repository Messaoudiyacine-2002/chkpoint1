const express = require("express");
const app = express();
const port = 3000;
var fs = require("fs");
var generator = require('generate-password');
var nodemailer = require('nodemailer');

//hello
console.log('Hello World');

app.get("/node",(req,res)=>{
    res.send("<h1>HELLO NODE<H1> \n");
});

//file

fs.createWriteStream('welcome.txt', function(err) {
    if (err) {
       return console.error(err);
    }
    console.log("File opened successfully!");     
 });

 fs.writeFile('welcome.txt', 'Hello node', function(err) {
    if (err) {
       return console.error(err);
    }
    
});


//password
var password = generator.generate({
	length: 10,
	numbers: true
});

console.log(`le mot de passe est${password}`);

//mail

/* 
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });*/



app.listen(port,()=>console.log(`this is in port ${port}`));

