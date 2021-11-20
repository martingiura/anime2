const Anime = require ('./../models/Anime')

const getAnimes = async(req, res) => {
    const animes= await Anime.find({})
    res.render('allAnimes', { animes })
}

const putAnimes = async(req,res) => {
    const {id} = req.params
    // console.log(id)
    const { img } = req.body

    const animeActualizado = await Anime.findByIdAndUpdate(animeEncontrado, {img}, {new:true})
    res.redirect('/animes')

}
module.exports = { getAnimes, putAnimes }