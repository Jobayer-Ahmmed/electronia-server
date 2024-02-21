import { Schema, model } from "mongoose"


const MonitorTVSchema = new Schema({
    product_name: {type:String},
    brand: {type: String},
    model: {type: String},
    image: {type: String},
    price: {type: String},
    description: {type: String}
})

const MonitorTVCollection = model("MonitorTVCollection", MonitorTVSchema)

export default MonitorTVCollection