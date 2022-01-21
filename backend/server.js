const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const routes = require('./routes/commonroutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/ExpenseTracker",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

const db = mongoose.connection;
db.on('error', () => {
    console.log("Something went wrong!!");
})
db.once('open', () => {
    console.log("Connected to the DB");
})
app.use(cors())
app.use('/expense', routes)

app.listen('5000', () => {
    console.log("Server started...")

})