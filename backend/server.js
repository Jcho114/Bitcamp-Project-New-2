import path from "path";
import fs from "fs";

import { MongoClient } from "mongodb";
import { createRequire } from 'module';

import App from "../frontend/src/App.js";


const require = createRequire(import.meta.url);

const connectionString = "mongodb+srv://jcho114:p9HjoUIOJRd7sD4F@joseph.rf512wj.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch(e) {
    console.error(e);
}

const db = conn.db("test");

const express = require("express");

const PORT = 3000;

const app = express();

app.get('/', function(req, res) {
    fs.readFile(path.resolve("../frontend/public/index.html"), "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send("An error occurred");
        }

        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        );
    });
});

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.get("/api", (req, res) => {
    res.json({ "message": "Hello from server!" });
});

app.post('/demo', async (req, res) => {
    const houseValue = await db.getCollection('homevalues').findOne({
        Year: req.body.Year,
        Zipcode: req.body.Zipcode
    });

    res.send(houseValue["House Value"]);
});

app.post('/signin', async (req, res) => {
    // Check if the user has provided a username and password
    if (!req.body.username || !req.body.password) {
    res.send(400, {
        message: 'Please provide a username and password'
    });
    return;
    }

    

    // Check if the username and password are valid
    //FIND THE USER IN THE DATABASE
    const user = await db.getCollection('logins').findOne({
        username: req.body.username
    });

    if (!user) {
    res.send(401, {
        message: 'Invalid username or password'
    });
    return;
    }

    // Check if the password is correct
    if (!(user.password === req.body.password)) {
    res.send(401, {
        message: 'Invalid username or password'
    });
    return;
    }

    // Sign the user in
    const token = jwt.sign({
    user: user.id
    }, process.env.JWT_SECRET, {
        expiresIn: '10h'
    });

    // Send the token back to the client
    res.send(200, token);
});

//!THINGS TO INSTALL
//! fix express install, mongodb, jwt