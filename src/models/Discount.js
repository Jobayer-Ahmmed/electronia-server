import { Schema, model } from "mongoose"


const DiscountSchema = new Schema({
    product_name: {type:String},
    brand: {type: String},
    model: {type: String},
    image: {type: String},
    rating: {type: Number},
    price: {type: String},
    description: {type: String}
})

const DiscountCollection = model("DiscountCollection", DiscountSchema)
export default DiscountCollection