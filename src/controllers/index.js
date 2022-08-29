const db = require("../db");

class CollationController {
  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async createItem(req, res) {
    try {
      const { body } = req;
      const result = await db.models.collation.addItem(body);
      return res.status(201).json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getAllItems(req, res) {
    try {
      const result = await db.models.collation.getAllItems();
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
  static async getItem(req, res) {
    try {
      const { params } = req;
      const result = await db.models.collation.getItemByPk(params.id);
      return res.status(200).json({ result });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = CollationController;
