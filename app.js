 //requiring express
 const express = require("express");
 const app = express();
 //requiring moongoose
 const mongoose = require("mongoose");
 let port = 8080;

 const mongo_URL = 'mongodb://127.0.0.1:27017/myapp';

 main()
 .then(() => {
    console.log("DB connected");
 }).catch((err) => {
    console.log(err);
 })

async function main() {
    await mongoose.connect(mongo_URL);
}

app.get("/", (req, res) => {
    res.send("Hi");
})

 app.listen(port, ()=>{

    console.log ("Listening");

 });