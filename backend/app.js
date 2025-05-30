import express from 'express';
const app = express();
import dotenv from 'dotenv';
import { connectDatabase } from './config/dbConnect.js';
import errorMiddleWare from './middlewares/error.js';

//handle uncaught exception
process.on('uncaughtException', (err) => {
    console.log(`ERROR: ${err}`);
    console.log("Shutting down server due to unhandled uncaught exceptions");
    process.exit(1)
})

dotenv.config({ path: 'backend/config/config.env' })

//connecting to database
connectDatabase();

app.use(express.json());

//import all routes
import productRoutes from './routes/products.js';

app.use('/api/', productRoutes);

// using error middleware
app.use(errorMiddleWare);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started at PORT : ${process.env.PORT} IN ${process.env.NODE_ENV} mode.`)
})

//handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log(`ERROR: ${err}`);
    console.log("Shutting down server due to unhandled Promise Rejection");
    server.close(() => {
        process.exit(1)
    })
})
