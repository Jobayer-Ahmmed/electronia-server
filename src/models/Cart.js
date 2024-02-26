import { Schema, model } from "mongoose";


const cartSchema = new Schema({
    email: {type: String, required: true},
    product_name: {type: String},
    image: {type: String},
    price: {type: Number}
})

const cartModel = model("cartCollectioin", cartSchema)
export default cartModel