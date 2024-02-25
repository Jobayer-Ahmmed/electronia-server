import express from "express"
import DiscountCollection from "../../../models/Discount.js"

const router = express.Router()

router.get("/discount", async(req, res)=>{
    const result = await DiscountCollection.find()
    res.send(result)
})

export default router