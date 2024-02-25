import { Schema, model } from "mongoose"


const TechTrendsSchema = new Schema({
    product_name: {type:String},
    brand: {type: String},
    model: {type: String},
    image: {type: String},
    rating: {type: Number},
    price: {type: String},
    description: {type: String}
})

const TechTrendsCollection = model("TechTrendsCollection", TechTrendsSchema)
export default TechTrendsCollection