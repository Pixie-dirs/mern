import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];

        let decodedData = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decodedData;

        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized', status:'nook' });
        console.log(chalk.red.bold(`Unauthorized: ${error.message}`));
    }
};

export default auth;