import { Schema, model } from "mongoose"


const CustomerFeedbackSchema = new Schema({
    customer_name: {type:String},
    image: {type: String},
    feedback: {type: String}
})

const CustomerFeedbackCollection = model("FeedbackCollection", CustomerFeedbackSchema)
export default CustomerFeedbackCollection