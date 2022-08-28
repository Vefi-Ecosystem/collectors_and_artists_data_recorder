const { Sequelize, DataTypes, ModelStatic, Model } = require("sequelize");
const { v4 } = require("uuid");

class Collation {
  /**
   *
   * @param {Sequelize} sequelize
   */
  constructor(sequelize) {
    /**
     * @type {ModelStatic<Model<any>>}
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
      },
      hashes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      launched: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    });
  }

  addItem(item) {
    return new Promise((resolve, reject) => {
      this.model
        .create({ id: v4(), ...item })
        .then(m => m.toJSON())
        .then(resolve)
        .catch(reject);
    });
  }

  getAllUnlaunchedItems() {
    return new Promise((resolve, reject) => {
      this.model
        .findAll({ where: { launched: false } })
        .then(models => models.map(model => model.toJSON()))
        .then(resolve)
        .catch(reject);
    });
  }

  getItemByPk(id) {
    return new Promise((resolve, reject) => {
      this.model
        .findByPk(id)
        .then(model => model.toJSON())
        .then(resolve)
        .catch(reject);
    });
  }

  updateItem(id, update) {
    return new Promise((resolve, reject) => {
      this.model
        .update(update, { where: { id }, returning: true })
        .then(([, affectedRows]) => affectedRows[0])
        .then(model => model.toJSON())
        .then(resolve)
        .catch(reject);
    });
  }

  deleteItem(id) {
    return new Promise((resolve, reject) => {
      this.model.destroy({ where: { id } }).then(resolve).catch(reject);
    });
  }
}

module.exports = Collation;
