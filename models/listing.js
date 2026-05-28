const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const defaultImageUrl = "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80";

const listingSchema = new Schema (
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true,
            default: defaultImageUrl,
            set: (v) => 
                v === "" ? defaultImageUrl : v, 
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        location: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    }
);

const listing = mongoose.model("listing", listingSchema);
module.exports = listing; 
