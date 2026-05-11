 //requiring express
 const express = require("express");
 const app = express();
 //requiring moongoose
 const mongoose = require("mongoose");
 let port = 8080;

 const mongo_URL = 'mongodb://127.0.0.1:27017/myapp';
 const listing = require("./models/listing.js");
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

app.get("/testlisting", async(req,res) => {
   let sample = new listing ({
    title: "Vella",
    description: "xyz",
    price: 1200,
    image: "",
    location: "California",
    country: "USA"
   });
   await sample.save();
   console.log("saved");
   res.send("Successful");
});
 app.listen(port, ()=>{

    console.log ("Listening");

 });