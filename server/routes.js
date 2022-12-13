import express from 'express';
import productModel from "./Models/Product.js";
import CartModel from "./Models/Cart.js";
import cors from 'cors';

var router = express.Router();

router.post("/add_product", async (request, response) => {
    const product = new productModel(request.body);
  
    try {
      await product.save();
      response.send(product);
    } catch (error) {
      response.status(500).send(error);
    }
});

router.post("/add-cart", async (request, response) => {
   const cart = new CartModel(request.body);

   try {
    await cart.save();
    response.send(cart);
  } catch (error) {
    response.status(500).send(error);
  }
})

router.get("/products", cors(), async (request, response) => {
    const products = await productModel.find({});
  
    try {
      response.send(products);
    } catch (error) {
      response.status(500).send(error);
    }
});

export {router};