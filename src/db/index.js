const { Sequelize } = require("sequelize");
const { buildModels } = require("./models");
const { dbUrl } = require("../env");

const sequelize = new Sequelize(dbUrl);

module.exports.models = buildModels(sequelize);
module.exports.sequelize = sequelize;
