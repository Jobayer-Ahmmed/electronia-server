import axios from "axios";
import express from "express"

const router = express.Router()

router.post("/payment", async(req, res)=>{
    // console.log(req.body)
    const { full_name, email, amount} = req.body;

    const options = {
        method: 'POST',
        url: process.env.UDDOKTAPAY_BASE_URL,
        headers: {
            'Accept': 'application/json',
            'RT-UDDOKTAPAY-API-KEY': process.env.UDDOKTAPAY_API_KEY,
            'Content-Type': 'application/json'
        },
        data: {
            full_name,
            email,
            amount,
            metadata: {},
            redirect_url: 'https://electronia-99f43.web.app/success',
            cancel_url: 'https://electronia-99f43.web.app/cancel',
            webhook_url: 'https://electronia-99f43.web.app/ipn',
        }
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating payment charge' });
    }

})

export default router