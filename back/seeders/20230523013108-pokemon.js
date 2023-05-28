'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
    Example:*/
    await queryInterface.bulkInsert('pokemons', [{
      // normais
      nome: "Snorlax",
      imagem: "/uploads/snorlax.jpg",
      habilidades: "Imunidade",
      tipo_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: "Ditto",
      imagem: "/uploads/ditto.jpg",
      habilidades: "Copiar",
      tipo_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      // Fogo
      nome: "Charizard",
      imagem: "/uploads/charizard.png",
      habilidades: "Copiar",
      tipo_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: "Ponyta",
      imagem: "/uploads/ponyta.png",
      habilidades: "Copiar",
      tipo_id: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      // Água
      nome: "Blastoise",
      imagem: "/uploads/blastoise.png",
      habilidades: "Torrent",
      tipo_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: "Krabby",
      imagem: "/uploads/krabby.png",
      habilidades: "Garra",
      tipo_id: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      // Psiquico
      nome: "Abra",
      imagem: "/uploads/abra.png",
      habilidades: "foco interno",
      tipo_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nome: "Mew",
      imagem: "/uploads/mew.png",
      habilidades: "Sincronizar",
      tipo_id: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
