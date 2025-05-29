import express from 'express';
const app = express();
import dotenv from 'dotenv';
import { connectDatabase } from './config/dbConnect.js';

dotenv.config({path: 'backend/config/config.env'})

//connecting to database
connectDatabase();

app.use(express.json());

//import all routes
import productRoutes from './routes/products.js';

app.use('/api/',productRoutes)

app.listen(process.env.PORT, ()=> {
    console.log(`Server started at PORT : ${process.env.PORT} IN ${process.env.NODE_ENV} mode.`)
})
