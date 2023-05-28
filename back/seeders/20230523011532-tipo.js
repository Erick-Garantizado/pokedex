'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:*/
      await queryInterface.bulkInsert('tipos', [{
        nome: "Normal",
        descricao: "É considerado um dos melhores tipos por ter uma das mais resistentes defesas, sendo fraco apenas contra Lutador. Geralmente aprendem golpes de vários tipos diferentes, sendo uma boa estratégia em equipes. Existem ao todo 97 Pokémons deste tipo. Fraquezas: Lutador Resistência: Nenhum Imunidade: Fantasma ",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: "Fogo",
        descricao: "Conhecidos como Pokémons de golpes de muita força, os tipo Fogo possuem muita ofensiva em batalha. Geralmente são vermelhos ou alaranjados e habitam regiões montanhosas e vulcânicas. Existem 48 (51 incluindo Castform, Rotom e formas de Darmanitan). Fraquezas: Terra, Rocha e Água Resistências: Inseto, Aço, Fogo, Grama e Gelo.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: "Água",
        descricao: "Descrição: Estão presentes em todos os tipos de ambientes úmidos, como rotas chuvosas, poças d'água, lagos, rios, mares, lama e outros espaços. São presenças garantidas em diversas equipes de todos os treinadores. É o tipo com maior quantidade de Pokémons, 110 ao todo. Fraquezas: Grama e Elétrico Resistências: Aço, Fogo, Água e Gelo.",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        nome: "Psíquico",
        descricao: "Suas técnicas são baseadas em habilidades paranormais. Existem 68 psíquicos, sendo o tipo mais comum entre os lendários. Era considerado o tipo mais poderoso durante a 1ª Geração. Fraquezas: Fantasma, Noturno e Inseto       Resistências: Lutador e Psíquico       Imunidade: Fantasma (Geração I).",
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
