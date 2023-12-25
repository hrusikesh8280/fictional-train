const express = require("express")

const cors = require("cors")
const { connection } = require("./connection/db")
const userRouter = require("./routes/auth.routes")
const emiRoutes = require("./routes/emi.routes")
const profileRoutes = require("./routes/profile.routes")



const app = express()
app.use(express.json())
app.use(cors());

app.use("/api/auth",userRouter)
app.use("/api/profile", profileRoutes);
app.use("/api/emi", emiRoutes)




app.listen(9009,async()=>{
    try{
        await connection
        console.log("Server mongoose started");
    }catch(err){
        console.log(err);
    }
    console.log("Server is Running at 9009");
})