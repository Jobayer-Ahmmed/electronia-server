import express from "express"
import CustomerFeedbackCollection from "../../../models/CustomerFeedback.js"


const router = express.Router()

router.get("/feedback", async(req, res)=>{
    const result = await CustomerFeedbackCollection.find()
    res.send(result)
})

export default router