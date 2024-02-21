import express from "express"
import PhoneCollection from "../../models/Phone.js"



const router = express.Router()

router.get("/phone", async(req, res)=>{
    const result = await PhoneCollection.find()
    res.send(result)
})

export default router