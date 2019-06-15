const express = require("express")
const app = express()
const mongoose = require('mongoose')
const morgan = require("morgan")
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const cookieParser = require('cookie-parser')
dotenv.config()

// db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB Connection error: ${err.message}`);
})

// bring routes
const postRoutes = require('./routes/post')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

// middleware
app.use(morgan("dev"));
app.use(bodyParser());
app.use(cookieParser());
app.use(expressValidator());
app.use("/", postRoutes);
app.use("/", authRoutes);
app.use("/", userRoutes);
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError')
    {
        res.json({error: 'invalid token'})
    }
})
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`A node JS api : ${port}`);
});