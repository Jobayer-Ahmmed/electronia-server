import { Schema, model } from "mongoose"


const RefrigeratorSchema = new Schema({
    product_name: {type:String},
    brand: {type: String},
    model: {type: String},
    image: {type: String},
    price: {type: String},
    description: {type: String}
})

const RefrigeratorCollection = model("RefrigeratorCollection", RefrigeratorSchema)
export default RefrigeratorCollection