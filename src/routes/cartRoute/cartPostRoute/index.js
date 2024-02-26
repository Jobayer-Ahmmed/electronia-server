import express from "express"
import cartModel from "../../../models/Cart.js"


const router = express.Router()

router.post("/cart", async(req, res)=>{
    const data = req.body
    const sentData = new cartModel(data)
    const result = await sentData.save()
    res.send(result)
})
export default router