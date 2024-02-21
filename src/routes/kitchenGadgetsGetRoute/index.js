import express from "express"
import KitchenGadgetsCollection from "../../models/KitchenGadgets.js"

const router = express.Router()

router.get("/kitchenGadgets", async(req, res)=>{
    const result = await KitchenGadgetsCollection.find()
    res.send(result)
})

export default router