import express from "express"
import AcCollection from "../../../models/AC.js"

const router = express.Router()

router.post("/ac", async(req, res)=>{
    const getData = new AcCollection(req.body)
    const result = await getData.save()
    res.send(result)
})

export default router