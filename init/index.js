const mongoose = require('mongoose');
const initData = require('./data');
const Listing = require('../models/listing');

const MONGO_URL = 'mongodb://localhost:27017/wanderlust';

main().then(() => {
    console.log("connected to db");
}).catch
((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(MONGO_URL)
};

const init = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '67fc719895d9461d9a953932'}))
    await Listing.insertMany(initData.data);
    console.log("data initialized");
};

init();