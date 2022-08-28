const { Sequelize, DataTypes, Model } = require("sequelize");

class Collation {
  /**
   *
   * @param {Sequelize} sequelize
   */
  constructor(sequelize) {
    /**
     * @type {Model}
     */
    this.model = sequelize.define("collation", {
      id: { type: DataTypes.UUID, primaryKey: true },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {
            msg: "Invalid email address"
          }
        }
      },
      artistName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Artist name is required"
          }
        }
      },
      collectionName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Collection name is required"
          }
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Description is required"
          }
        }
      },
      supply: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      blockchain: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Blockchain is required"
          }
        }
      },
      maxPerAddress: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      socialMediaHandles: {
        type: DataTypes.JSON
      }
    });
  }
}

module.exports = Collation;
