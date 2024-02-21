import { Schema, model } from "mongoose"


const LaptopSchema = new Schema({
    product_name: {type:String},
    brand: {type: String},
    model: {type: String},
    image: {type: String},
    price: {type: String},
    description: {type: String}
})

const LaptopCollection = model("LaptopCollection", LaptopSchema)
export default LaptopCollection