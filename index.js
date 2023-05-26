const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/User')
const app = express()
app.use(express.json({ extended: true }))
app.use(express.urlencoded())
const port = 3000


//substitute connection 
mongoose.connect('mongodb://leoniakmaciek1:rkqMA30u@ac-ig4sdoa-shard-00-02.yamms2s.mongodb.net:27017/?tlsAllowInvalidHostnames=true&tlsAllowInvalidCertificates=true&tls=true&authMechanism=DEFAULT')
    .then(() => {
        console.log('Successfully Connected');
    })
    .catch(() => {
        console.error('Error');
    });

// Endpoints to server the

app.get('/login', (req, res) => {
    res.sendFile("pages/login.html", { root: __dirname })
})

// Endpoints for APIs


app.post('/login', async (req, res) => {
    let user = await User.findOne(req.body)
    console.log(user)
    if (!user) {
        res.status(200).json({ success: false, massage: "No user found" })
    } else {
        res.status(200).json({ success: true, user: { email: user.email }, massage: "User found" })
    }

    // res.sendFile("pages/signup.html", { root: __dirname })
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}/login`)
})