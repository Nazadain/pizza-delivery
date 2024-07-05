const IngredientService = require("../services/ingredient.service");
const uuid = require("uuid");

class IngredientController {
  async createIngredient(req, res) {
    try {
      const id = uuid.v4();
      const newIngredient = await IngredientService.createIngredient(
        id,
        req.body
      );
      res.json(newIngredient);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Create ingredient error" });
    }
  }

  async getIngredients(req, res) {
    try {
      const ingredients = await IngredientService.getIngredients();
      res.json(ingredients);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Get ingredients error" });
    }
  }

  async getIngredientById(req, res) {
    try {
      const ingredient = await IngredientService.getIngredientById(
        req.params.id
      );
      res.json(ingredient);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Get ingredient by ID error" });
    }
  }

  async deleteIngredient(req, res) {
    try {
      await IngredientService.deleteIngredient(req.params.id);
      res.json({ message: "Ingredient deleted successfully" });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Delete ingredient error" });
    }
  }
}

module.exports = new IngredientController();
