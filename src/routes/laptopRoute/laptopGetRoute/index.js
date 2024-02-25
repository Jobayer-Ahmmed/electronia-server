import express from "express"
import LaptopCollection from "../../../models/Laptop.js"


const router = express.Router()

router.get("/laptop", async(req, res)=>{
    const result = await LaptopCollection.find()
    res.send(result)
})

export default router