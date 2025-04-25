import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/db.js';
import userRoute from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


dotenv.config({});

//call db connections
connectDB();
const app = express();
const PORT =process.env.PORT || 5000;

app.use(express.json()); // middleware to parse json data
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5000', // specify the origin url
    credentials: true, 
}));

//  
app.use("/api/v1/users", userRoute); //act as middleware

app.get('/home', (req,res) => {
    res.status(200).json({
        success: true,
        message:"its backend server"
    })
})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})