import express from "express"
import AcCollection from "../../models/AC.js"


const router = express.Router()

router.get("/ac", async(req, res)=>{
    const result = await AcCollection.find()
    res.send(result)
})

export default router