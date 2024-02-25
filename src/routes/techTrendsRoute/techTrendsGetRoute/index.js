import express from "express"
import TechTrendsCollection from "../../../models/TechTrends.js"

const router = express.Router()

router.get("/tech-trends", async(req, res)=>{
    const result = await TechTrendsCollection.find()
    res.send(result)
})

export default router