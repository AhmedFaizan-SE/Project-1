const sampleListings = [
    {
        title: "Ocean View Apartment",
        description: "Beautiful apartment with sea view and modern interior.",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
        price: 2500,
        location: "Miami",
        country: "USA"
    },
    {
        title: "Mountain Cabin Retreat",
        description: "Peaceful cabin surrounded by mountains and nature.",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=80",
        price: 1800,
        location: "Colorado",
        country: "USA"
    },
    {
        title: "City Studio Apartment",
        description: "Compact studio in downtown with great connectivity.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
        price: 1200,
        location: "New York",
        country: "USA"
    },
    {
        title: "Beach House Villa",
        description: "Luxury villa with private beach access.",
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
        price: 5000,
        location: "California",
        country: "USA"
    },
    {
        title: "Countryside Cottage",
        description: "Cozy cottage surrounded by greenery and fresh air.",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
        price: 900,
        location: "Texas",
        country: "USA"
    },
    {
        title: "Modern Loft",
        description: "Stylish loft with open space and city skyline view.",
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
        price: 2200,
        location: "Chicago",
        country: "USA"
    },
    {
        title: "Desert Safari Camp",
        description: "Traditional desert camp with luxury tents.",
        image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1200&q=80",
        price: 1500,
        location: "Arizona",
        country: "USA"
    },
    {
        title: "Lake House Retreat",
        description: "Peaceful house beside a calm lake.",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80",
        price: 2700,
        location: "Minnesota",
        country: "USA"
    },
    {
        title: "Penthouse Suite",
        description: "Luxury penthouse with skyline views.",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        price: 8000,
        location: "Los Angeles",
        country: "USA"
    },
    {
        title: "Farmhouse Escape",
        description: "Rustic farmhouse surrounded by fields.",
        image: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1200&q=80",
        price: 1100,
        location: "Kansas",
        country: "USA"
    },
    {
        title: "Snow Mountain Chalet",
        description: "Warm chalet near snowy mountains.",
        image: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=1200&q=80",
        price: 3000,
        location: "Alaska",
        country: "USA"
    },
    {
        title: "Urban Apartment",
        description: "Modern apartment in busy city center.",
        image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
        price: 2000,
        location: "San Francisco",
        country: "USA"
    },
    {
        title: "Luxury Resort Room",
        description: "5-star resort with ocean view and spa.",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        price: 6000,
        location: "Hawaii",
        country: "USA"
    },
    {
        title: "Suburban Home",
        description: "Comfortable home in quiet neighborhood.",
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
        price: 1400,
        location: "Ohio",
        country: "USA"
    },
    {
        title: "Island Villa",
        description: "Private island villa with tropical vibes.",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
        price: 9000,
        location: "Florida Keys",
        country: "USA"
    },
    {
        title: "Downtown Condo",
        description: "Elegant condo in business district.",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        price: 2600,
        location: "Seattle",
        country: "USA"
    },
    {
        title: "Vintage Home",
        description: "Classic home with old-school charm.",
        image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=1200&q=80",
        price: 1300,
        location: "Boston",
        country: "USA"
    },
    {
        title: "Jungle Treehouse",
        description: "Unique treehouse stay in dense jungle.",
        image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1200&q=80",
        price: 1700,
        location: "Amazon",
        country: "Brazil"
    },
    {
        title: "Luxury Pent Villa",
        description: "Ultra-modern villa with rooftop pool.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        price: 10000,
        location: "Dubai",
        country: "UAE"
    },
    {
        title: "Seaside Bungalow",
        description: "Relaxing bungalow near the beach.",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
        price: 2100,
        location: "Malibu",
        country: "USA"
    }
];
module.exports = {data: sampleListings};
