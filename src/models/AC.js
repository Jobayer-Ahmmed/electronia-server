import { Schema, model } from "mongoose"


const AcSchema = new Schema({
    product_name: {type:String},
    brand: {type: String},
    model: {type: String},
    image: {type: String},
    rating: {type: Number},
    price: {type: String},
    npm: {type: String}
})

const AcCollection = model("AcCollection", AcSchema)
export default AcCollection