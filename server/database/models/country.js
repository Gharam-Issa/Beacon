const mongoose = require('mongoose')

const countrySchema = new mongoose.Schema({

    code: {
        type: String
    },
    num: {
        type: Number
    },
    lat: {
        type: Number
    },
    lon: {
        type: Number
    },
},
    { timestamps: true })


let country = mongoose.model('country', countrySchema);

module.exports = country