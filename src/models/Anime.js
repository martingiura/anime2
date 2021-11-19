// IMPORTACIONES

const mongoose = require('mongoose')
const Schema = mongoose.Schema

//SCHEMA
const animeSchema = new Schema({
    name: String,
    description: String,
    Rating: String,
    episode: Number,
    categoria: String,
    studio: String,
    img: String
},{timestamps: true})

//MODELO
const Anime = mongoose.model('Anime', animeSchema)

// EXPORTACIONES

module.exports = Anime