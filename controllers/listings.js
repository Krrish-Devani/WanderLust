const Listing = require('../models/listing.js');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });
const escapeRegExp = require('../utils/escapeRegExp.js');

module.exports.index = async (req, res) => {
    const { category } = req.query;
    let filter = {};

    if (category && category !== 'all') {
        filter.category = category;
    }

    const allListings = await Listing.find(filter);
    if (!allListings || allListings.length === 0) {
        req.flash('error', "No listings found for this category!");
        return res.redirect('/listings');
    }

    res.render('listings/index.ejs', { allListings, activeCategory: category || 'all' });
};

module.exports.renderNewForm = (req, res) => {
    res.render('listings/new.ejs');
};

module.exports.createListing = async (req, res, next) => {
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    }).send();

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { filename, url };
    newListing.geometry = response.body.features[0].geometry;
    await newListing.save();
    req.flash('success', "Successfully created a new listing!");
    res.redirect('/listings');
};

module.exports.showLiating = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({path: 'reviews', populate: {path: 'author'}}).populate('owner');
    if(!listing) {
        req.flash('error', "Listing not found!");
        return res.redirect('/listings');
    }
    res.render('listings/show.ejs', { listing });
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash('error', "Listing not found!");
        return res.redirect('/listings');
    };

    let originalImage = listing.image.url;
    originalImage = originalImage.replace('/upload', '/upload/w_250')
    res.render('listings/edit.ejs', { listing, originalImage });
};

module.exports.updateListing = async (req, res) => {

    let { id } = req.params;

    if(!req.body.listing) {
        throw new ExpressError(400, "Bad Request");
    }
    let listing = await Listing.findByIdAndUpdate(id, {...req.body.listing});
    
    if(typeof req.file !== 'undefined') {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { filename, url };
        await listing.save();
    };
    req.flash('success', "Successfully updated the listing!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash('success', "Successfully deleted the listing!");
    res.redirect('/listings');
};

module.exports.searchListings = async (req, res) => {
    const { country } = req.query;

    if (!country) {
        req.flash('error', "Please provide a country to search for listings.");
        return res.redirect('/listings');
    }

    const countryRegex = new RegExp(escapeRegExp(country), 'i');

    const allListings = await Listing.find({ country: countryRegex });
    if (!allListings || allListings.length === 0) {
        req.flash('error', "No listings found for this country!");
        return res.redirect('/listings');
    }
    
    res.render('listings/index.ejs', { allListings, activeCategory: 'all', country });

}

