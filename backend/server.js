const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// env config
dotenv.config({path: './backend/.env'});
// Connect to mongoDB
connectDB();

// Rest object
const port = process.env.PORT;
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Router import
const userRoutes = require('./routes/userRoutes')
// Routes
app.use('/api/v1/user', userRoutes);

app.listen(port, () => {
    console.log(`${process.env.DEV_MODE} : let-bloggy app listening on port ${port} http://localhost:${port}/`)
})