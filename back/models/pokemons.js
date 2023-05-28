'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.tipos, {
        as: 'tipo',
        foreignKey: 'tipo_id',
      })
    }
  }
  pokemons.init({
    nome: DataTypes.STRING,
    tipo_id: DataTypes.INTEGER,
    imagem: DataTypes.STRING,
    habilidades: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pokemons',
  });
  return pokemons;
};