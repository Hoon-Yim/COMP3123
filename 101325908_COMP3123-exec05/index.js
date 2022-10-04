const fs = require("fs");

const express = require('express');
const app = express();
const router = express.Router();

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req, res) => {
    res.sendFile(`${__dirname}/home.html`);
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req, res) => {
    const user = JSON.parse(fs.readFileSync(`${__dirname}/user.json`, "utf-8"));
    res.status(200).json(user);
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req, res) => {
    const user = JSON.parse(fs.readFileSync(`${__dirname}/user.json`, "utf-8"));
    if (req.query.username === null || req.query.username !== user.username) {
        res.status(401).json({
            status: false,
            message: "User Name is invalid"
        });
    } else if (req.query.password === null || req.query.password !== user.password) {
        res.status(401).json({
            status: false,
            message: "Password is invalid"
        });
    } else {
        res.status(201).json({
            status: true,
            message: "User is valid"
        });
    }
});

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req, res) => {
    res.status(200).send(`<b>${req.params.username} successfully logout.</b>`);
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port ' + (process.env.port || 8081));