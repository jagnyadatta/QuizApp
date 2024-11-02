import express from "express"
import connectDB from "./utils/db.js";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";

dotenv.config({});
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//API's Here
app.use("/api/v1/user", userRoute);

//global error handle
app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message
    });
});

//Server Listening and mongo DB connection
app.listen(PORT, ()=>{
    connectDB();
    console.log(`App listening on the port ${PORT}`);
});