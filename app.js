 // App setup
 const express = require("express");
 const app = express();
 const mongoose = require("mongoose");
 const methodOverride = require("method-override");
 const ejsMate = require("ejs-mate"); 
 const path = require("path");
 let port = 8080;

 // Connect to local MongoDB database
 const mongo_URL = 'mongodb://127.0.0.1:27017/myapp';
 app.use(express.urlencoded({extended:true}));
 app.use(methodOverride("_method"));
 app.engine('ejs', ejsMate);
 app.use(express.static(path.join(__dirname, "/public")));

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


// Show all listings
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings}); 
});

// new route

app.get("/listings/new" , (req, res) => {
    res.render("listings/new.ejs"); 
})

// creating new route
app.post("/listings", async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
});

app.get("/listings/:id/edit", async (req, res)=> {
  let {id} = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/edit.ejs" , {listing})
});

app.put("/listings/:id", async (req, res) => {
 let {id} = req.params;
await Listing.findByIdAndUpdate(id, {...req.body.listing}, {runValidators: true});
res.redirect(`/listings/${id}`);
});

// Show details for one listing
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

// Delete listing

app.delete("/listings/:id" , async (req, res) => {
 let {id} = req.params;
 let deleteditem = await Listing.findByIdAndDelete(id);
 res.redirect("/listings");
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
