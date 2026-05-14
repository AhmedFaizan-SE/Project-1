 //requiring express
 const express = require("express");
 const app = express();
 //requiring moongoose
 const mongoose = require("mongoose");
 let port = 8080;

 const mongo_URL = 'mongodb://127.0.0.1:27017/myapp';
 app.use(express.urlencoded({extended:true}));
 
 const path = require("path");

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

const Listing = require("./models/listing.js");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings}); 
});

app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});


// app.get("/testlisting", async(req,res) => {
//    let sample = new listing ({
//     title: "Vella",
//     description: "xyz",
//     price: 1200,
//     image: "",
//     location: "California",
//     country: "USA"
//    });
//    await sample.save();
//    console.log("saved");
//    res.send("Successful");
// });
 app.listen(port, ()=>{

    console.log ("Listening");

 });