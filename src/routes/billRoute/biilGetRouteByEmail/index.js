import express from "express"
import BillCollection from "../../../models/Bill.js"



const router = express.Router()

router.get("/bill_info", async(req, res)=>{
    try{
        const email = req.query.email
        const query = {email}
        const result = await BillCollection.find(query)
        res.send(result)
    } catch(err){
        console.log("Error in billGetRouteByEmail: ", err)
        res.status(500).send(err)
    }
})

export default router