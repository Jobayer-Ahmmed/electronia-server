import express from "express"
import applyMiddleWare from "./middlewares/applyMiddleWare.js"
import TechTrendsGet from "./routes/techTrendsRoute/techTrendsGetRoute/index.js"
import DiscountGet from "./routes/discountRoute/discountGetRoute/index.js"
import KitchenGadetsGet from "./routes/kitchenGadetsRoute/kitchenGadgetsGetRoute/index.js"
import LaptopGet from "./routes/laptopRoute/laptopGetRoute/index.js"
import PhoneGet from "./routes/phoneRoute/phoneGetRoute/index.js"
import RefrigeratorGet from "./routes/refrigeratorRoute/refrigeratorGetRoute/index.js"
import AcGet from "./routes/acRoute/acGetRoute/index.js"
import MonitorTVGet from "./routes/monitorTvRoute/monitorTvGetRoute/index.js"
import Feedback from "./routes/feedbackRoute/customerFeedbackGetRoute/index.js"
import CartPost from "./routes/cartRoute/cartPostRoute/index.js"
import CartGet from "./routes/cartRoute/cartGetRoute/index.js"
import CartDelete from "./routes/cartRoute/cartDeleteRoute/index.js"
import CartEmpty from "./routes/cartRoute/cartEmptyRoute/index.js"
import UddoktaPay from "./routes/uddoktaPay/index.js"
import verifyPayment from "./routes/verifyPayment/index.js"
import billPost from "./routes/billRoute/billPostRoute/index.js"
import billGetByTnx from "./routes/billRoute/billGetRouteByTnx/index.js"
import billGetByEmail from "./routes/billRoute/biilGetRouteByEmail/index.js"

const app =express()

applyMiddleWare(app)
app.use(TechTrendsGet)
app.use(DiscountGet)
app.use(KitchenGadetsGet)
app.use(LaptopGet)
app.use(PhoneGet)
app.use(RefrigeratorGet)
app.use(AcGet)
app.use(MonitorTVGet)
app.use(Feedback)
app.use(CartPost)
app.use(CartGet)
app.use(CartDelete)
app.use(CartEmpty)
app.use(UddoktaPay)
app.use(verifyPayment)
app.use(billPost)
app.use(billGetByTnx)
app.use(billGetByEmail)

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