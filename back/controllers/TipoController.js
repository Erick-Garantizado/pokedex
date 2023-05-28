const { tipos } = require("../models")

module.exports = class TipoController {
    static async show(req, res) {
        const tipo = await tipos.findAll()
        res.json(tipo)
    }

    static async showOne(req, res) {
        try {
            const { id }= req.params

            const tipo = await tipos.findAll({
                where:{
                    id:id
                }
            })
            
            res.json(tipo)
        } catch (error) {
            res.status(500).json({error})
        }
    }

    static async createOne(req, res) {
        try {
            const dados = req.body
        
            const tipo = await tipos.create({
                nome: dados.nome,
                descricao: dados.descricao
            })

            res.json(tipo)
        } catch (error) {
            res.status(500).json({error})
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params
            const { nome } = req.body
            const { descricao } = req.body

            const tipo = await tipos.update({
                nome:nome,
                descricao:descricao
            }, {
                where: {
                    id:id
                }
            })

            const tipo2 = await tipos.findByPk(id)

            res.json(tipo2)
        } catch (error) {
            res.status(500).json({error})
        }
    }

    static async destroy(req, res) {
        try {
            const { id }= req.params
        
            const tipo = await tipos.destroy({
                where: {
                    id:id
                }
            })

            if (tipo == 1) {
                res.json(true)
            } else {
                res.json(false)
            }
            
        } catch (error) {
            res.status(500).json({error})
        }
    }
}