import express from "express"
import BillCollection from "../../../models/Bill.js"



const router = express.Router()

router.get("/bill", async(req, res)=>{
    try{
        const transaction_id = req.query.transaction_id
        const query = {transaction_id}
        const result = await BillCollection.findOne(query)
        res.send(result)
    } catch(err){
        console.log("Error in billGetRoute: ", err)
        res.status(500).send(err)
    }
})

export default router