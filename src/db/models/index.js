const Collation = require("./collation");

module.exports.buildModels = function (sequelize) {
  return {
    collation: new Collation(sequelize)
  };
};
