import express from "express"
import RefrigeratorCollection from "../../models/Refrigerator.js"


const router = express.Router()

router.get("/refrigerator", async(req, res)=>{
    const result = await RefrigeratorCollection.find()
    res.send(result)
})

export default router