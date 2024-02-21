import { Schema, model } from "mongoose";



const KitchenGadgetsSchema = new Schema({
    product_name: {type:String},
    brand: {type: String},
    model: {type: String},
    image: {type: String},
    price: {type: String},
    description: {type: String}
})

const KitchenGadgetsCollection = model("KitchenGadgetsCollection", KitchenGadgetsSchema)
export default KitchenGadgetsCollection