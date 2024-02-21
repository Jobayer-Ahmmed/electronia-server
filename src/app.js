import express from "express"
import applyMiddleWare from "./middlewares/applyMiddleWare.js"
import TechTrendsGet from "./routes/techTrendsGetRoute/index.js"
import DiscountGet from "./routes/discountGetRoute/index.js"
import KitchenGadetsGet from "./routes/kitchenGadgetsGetRoute/index.js"
import LaptopGet from "./routes/laptopGetRoute/index.js"
import PhoneGet from "./routes/phoneGetRoute/index.js"
import RefrigeratorGet from "./routes/refrigeratorGetRoute/index.js"
import AcGet from "./routes/acGetRoute/index.js"

const app =express()


applyMiddleWare(app)
app.use(TechTrendsGet)
app.use(DiscountGet)
app.use(KitchenGadetsGet)
app.use(LaptopGet)
app.use(PhoneGet)
app.use(RefrigeratorGet)
app.use(AcGet)

app.get("/health", (req, res)=>{
    res.send("Electronia server is running")
})


app.all("*", (req, res, next)=>{
    const myErr = new Error(`The request URL is invalid : [${req.url}]`)
    myErr.status=404
    next(myErr)
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500).json({message : err.message})
})

export default app