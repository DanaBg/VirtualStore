import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: ''
  },
  imgUrl: {
    type: String,
    default: 'אין תמונה להמחשה'
  }
});

const productModel = mongoose.model("Product", ProductSchema);

export default productModel;