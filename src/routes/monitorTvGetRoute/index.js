import express from "express"
import MonitorTVCollection from "../../models/MonitorTV.js"

const router = express.Router()

router.get("/monitorTV", async(req, res)=>{
    const result = await MonitorTVCollection.find()
    res.send(result)
})

export default router