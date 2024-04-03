import { Schema, model } from "mongoose"


const BillSchema = new Schema({
    full_name: {type:String},
    email: {type: String},
    amount: {type: String},
    sender_number: {type: String},
    transaction_id: {type: String},
    date: {type: String},
})

const BillCollection = model("BillCollection", BillSchema)
export default BillCollection