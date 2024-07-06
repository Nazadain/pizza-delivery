const uuid = require("uuid");
const IngredientLinkService = require("../services/ingredientLink.service");

class ingredientLinkController {
  async createLink(req, res) {
    try {
      const id = uuid.v4();
      const newLink = await IngredientLinkService.createLink(
        id,
        req.query.table,
        req.body
      );
      res.json(newLink);
    } catch (e) {
      console.log(e);
      res.json({ message: "Create link error" });
    }
  }

  async getLinks(req, res) {
    try {
      const links = await IngredientLinkService.getLinks(req.query.table);
      res.json(links);
    } catch (e) {
      console.log(e);
      res.json({ message: "Get links error" });
    }
  }

  async getLinksByTableItemId(req, res) {
    try {
      const links = await IngredientLinkService.getLinksByTableItemId(
        req.params.id,
        req.query.table
      );
      res.json(links);
    } catch (e) {
      console.log(e);
      res.json({ message: "error" });
    }
  }

  async deleteLink(req, res) {
    try {
      await IngredientLinkService.deleteLink(req.params.id, req.query.table);
      res.json({ message: "Link deleted successfully" });
    } catch (e) {
      console.log(e);
      res.json({ message: "error" });
    }
  }
}

module.exports = new ingredientLinkController();
