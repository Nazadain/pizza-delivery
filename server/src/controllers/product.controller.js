const ProductService = require("../services/product.service");
const { uploadFile, deleteFile } = require("../utils/file.utils");
const uuid = require("uuid");
const path = require("path");

class ProductController {
  async createProduct(req, res) {
    try {
      const id = uuid.v4();
      const { img } = req.files;
      let fileName = `${uuid.v4()}.${img.mimetype.split("/")[1]}`;
      uploadFile(img, fileName);
      const newProduct = await ProductService.createProduct(
        id,
        fileName,
        req.body
      );
      res.json(newProduct);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Create product error" });
    }
  }

  async getProducts(req, res) {
    try {
      const { typeId } = req.query;
      if (!typeId) {
        const products = await ProductService.getProducts();
        return res.json(products);
      }
      const products = await ProductService.getProducts(typeId);
      res.json(products);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Get products error" });
    }
  }

  async getProductById(req, res) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      res.json(product);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Get product by ID error" });
    }
  }

  async updateProduct(req, res) {
    try {
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Update product error" });
    }
  }

  async deleteProduct(req, res) {
    try {
      const product = await ProductService.getProductById(req.params.id);
      const filePath = path.resolve(__dirname, "../static", product.img);
      deleteFile(filePath);
      await ProductService.deleteProduct(req.params.id);
      res.json("Product deleted successfully");
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Delete product error" });
    }
  }
}

module.exports = new ProductController();
