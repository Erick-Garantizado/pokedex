const { pokemons, tipos } = require('../models')

module.exports = class PokemonController {
    static async show(req, res) {
        const pokemon = await pokemons.findAll({
            include: 'tipo',
            attributes: ['id','nome', 'imagem', 'habilidades']
        })
        res.json(pokemon)
    }

    static async showOne(req, res) {
        try {
            const { id }= req.params

            const pokemon = await pokemons.findAll({
                where:{
                    id:id
                },
                include: 'tipo',
                attributes: ['id','nome', 'imagem', 'habilidades']
            })
            
            res.json(pokemon)
        } catch (error) {
            res.status(500).json({error})
        }
    }

    static async createOne(req, res) {
        try {
            const dados = req.body
            console.log(req.file)
            const pokemon = await pokemons.create({
                nome: dados.nome,
                tipo_id: dados.tipo,
                imagem: '/uploads/' + req.file.filename,
                habilidades: dados.habilidades,
                createdAt: new Date(),
                updatedAt: new Date()
            })

            res.json(pokemon)
        } catch (error) {
            res.status(500).json({error})
        }
    }
    
    static async update(req, res) {
        try {
            const { id } = req.params
            const { nome, tipo, habilidades } = req.body
            console.log(req.file)
            await pokemons.update({
                nome:nome,
                tipo_id:tipo,
                imagem: req.file ? '/uploads/' + req.file.filename : null ,
                habilidades:habilidades,
                updatedAt: new Date()
            }, {
                where: {
                    id:id
                }
            })

            const pokemon2 = await pokemons.findByPk(id)
            res.json({
                pokemon:pokemon2
            })

        } catch (error) {
            res.status(500).json({
                error
            })
        }
    }

    static async destroy(req, res) {
        try {
            const { id }= req.params
        
            const pokemon = await pokemons.destroy({
                where: {
                    id:id
                }
            })
            
            if (pokemon == 1) {
                res.json(true)
            } else {
                res.json(false)
            }
            
        } catch (error) {
            res.status(500).json({error})
        }
    }
}