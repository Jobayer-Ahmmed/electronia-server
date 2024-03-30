import express from "express"
import cartModel from "../../../models/Cart.js"

const router = express.Router()

router.delete("/cart_empty", async(req, res)=>{
    const email = req.query.email
    // console.log("from cartEmpty 8",email)
    const query = {email}
    const result = await cartModel.deleteMany(query)
    res.send(result)
})

export default router