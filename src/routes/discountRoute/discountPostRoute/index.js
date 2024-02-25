import express from "express"
import DiscountCollection from "../../../models/Discount.js"

const router = express.Router()

router.post("/discount", async(req, res)=>{
    const getData = new DiscountCollection(req.body)
    const result = await getData.save()
    res.send(result)
})

export default router