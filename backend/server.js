import { MongoClient } from "mongodb";

const connectionString = "";

const client = new MongoClient(connectionString);

let conn;
try {
    conn = await client.connect();
} catch(e) {
    console.error(e);
}

const logindb = conn.db("login");


const express = require("express");

const PORT = 5000;

const app = express();


app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
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
    const user = await logindb.getCollection('logins').findOne({
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