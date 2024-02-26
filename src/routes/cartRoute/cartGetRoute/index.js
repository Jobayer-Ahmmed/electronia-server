import express from "express"
import cartModel from "../../../models/Cart.js"

const router = express.Router()

router.get("/cart", async(req, res)=>{
    const email = req.query.email
    const result = await cartModel.find({email})
    res.send(result)
})
export default router