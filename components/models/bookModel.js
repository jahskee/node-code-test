/*jshint esversion: 6 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({   
    title: {type: String, required: true},
    id: {type: String, required: true}, 
    author: {type: String, required: true}, 
    content: {type: String, required: true}, 
});

module.exports = mongoose.model('Book', schema);