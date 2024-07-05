const TypeService = require("../services/type.service");

class TypeController {
  async createType(req, res) {
    try {
      const newType = await TypeService.createType(req.body);
      res.json(newType);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Create type error" });
    }
  }

  async getTypes(req, res) {
    try {
      const types = await TypeService.getTypes();
      res.json(types);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Get type error" });
    }
  }

  async getTypeById(req, res) {
    try {
      const type = await TypeService.getTypeById(req.params.id);
      res.json(type);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Get type by ID error" });
    }
  }

  async deleteType(req, res) {
    try {
      await TypeService.deleteType(req.params.id);
      res.json({ message: "Type deleted successfully" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Delete type error" });
    }
  }
}

module.exports = new TypeController();
