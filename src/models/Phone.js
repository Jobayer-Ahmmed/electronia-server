import { Schema, model } from "mongoose"


const PhoneSchema = new Schema({
    product_name: {type:String},
    brand: {type: String},
    model: {type: String},
    image: {type: String},
    rating: {type: Number},
    price: {type: String},
    description: {type: String}
})

const PhoneCollection = model("PhoneCollection", PhoneSchema)
export default PhoneCollection