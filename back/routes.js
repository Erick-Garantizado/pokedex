const express = require('express')
const TipoController = require('./controllers/TipoController')
const PokemonController = require('./controllers/PokemonController')
const router = express.Router()

const multer = require('multer')
const storage = require('./config/storage')
const upload = multer({ storage:storage })

// Rotas para os tipos
router.get('/tipos', TipoController.show)
router.get('/tipos/:id', TipoController.showOne)
router.post('/tipos', TipoController.createOne)
router.put('/tipos/:id', TipoController.update)
router.delete('/tipos/:id', TipoController.destroy)

// Rotas para os pokemons
router.get('/pokemons', PokemonController.show)
router.get('/pokemons/:id', PokemonController.showOne)
router.post('/pokemons', upload.single('imagem'), PokemonController.createOne)
router.put('/pokemons/:id', upload.single('imagem'), PokemonController.update)
router.delete('/pokemons/:id', PokemonController.destroy)

router.get('/', (req, res) => {
    res.send({ resposta: 'ok' })
})


module.exports = router
