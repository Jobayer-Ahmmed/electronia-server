import { Schema, model } from "mongoose"


const AcSchema = new Schema({
    product_name: {type:String},
    brand: {type: String},
    model: {type: String},
    image: {type: String},
    price: {type: String},
    description: {type: String}
})

const AcCollection = model("AcCollection", AcSchema)
export default AcCollection