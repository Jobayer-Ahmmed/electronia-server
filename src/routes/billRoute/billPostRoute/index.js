import express  from  "express"
import BillCollection from "../../../models/Bill.js"

var router = express.Router()

router.post("/bill", async(req, res)=>{
    console.log(req.body)
    const billData = new BillCollection(req.body)
    const result = await billData.save()
    res.send(result)
})

export default router