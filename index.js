const express = require("express");
const mongoose = require('mongoose');
const userRouter = require("./routes/user");
const {connectMongoDb} = require("./connection");
const {logRequestAndResponse} = require("./middlewares")

const app = express();
const PORT = 8000;
const DATABASE_NAME = "USERS_DB"

// Connection
const connectionUrl = `mongodb://admin:password@127.0.0.1:27017/${DATABASE_NAME}?authSource=admin`
connectMongoDb(connectionUrl)

// MiddleWares
app.use(express.urlencoded({extended: false}));
app.use(logRequestAndResponse("log.txt"))
app.use("/api/users",userRouter)

app.listen(PORT, () => {
    console.log(`Server started at Port ${PORT}`)
})