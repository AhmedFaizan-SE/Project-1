const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const mongo_URL = 'mongodb://127.0.0.1:27017/myapp';

main()
 .then(() => {
    console.log("DB connected");
    initDB();
 }).catch((err) => {
    console.log(err);
 })

async function main() {
    await mongoose.connect(mongo_URL);
}

const initDB = async () => {

    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("Initialized");
    await mongoose.connection.close();

}
