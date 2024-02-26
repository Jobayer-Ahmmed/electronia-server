import express from "express"
import cartModel from "../../../models/Cart.js"

const router = express.Router()

router.delete("/cart", async(req, res)=>{
    const id = req.query.id
    const result = await cartModel.findByIdAndDelete(id)
    res.send(result)
})

export default router