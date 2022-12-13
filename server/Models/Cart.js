import mongoose from "mongoose";
const CartItem = new mongoose.Schema({
    id: {
      type: Number,
      required: true
    },
    amount: {
        type: Number,
        required: true
    }
    
  });

const CartSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  items: {
    type: [CartItem],
    required:true,
  }

});

const CartModel = mongoose.model("Cart", CartSchema);

export default CartModel;