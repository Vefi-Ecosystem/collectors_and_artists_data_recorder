const { Sequelize } = require("sequelize");
const { buildModels } = require("./models");

const sequelize = new Sequelize();

module.exports.models = buildModels(sequelize);
