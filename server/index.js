import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import chalk from 'chalk';

import exampleRoute from './routes/example.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/example', exampleRoute);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API Root' });;
});

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(chalk.greenBright(`Server running on port: ${PORT}`))))
    .catch((error) => console.log(chalk.redBright(error.message)));