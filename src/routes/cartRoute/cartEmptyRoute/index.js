import express from "express"
import cartModel from "../../../models/Cart.js"

const router = express.Router()

router.delete("/cart_empty", async(req, res)=>{
    console.log("cart Empty")
    const id = req.query.id
    const result = await cartModel.deleteMany()
    res.send(result)
})

export default router