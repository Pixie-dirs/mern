import express from 'express';
import mongoose from 'mongoose';
import chalk from 'chalk';


import Example from '../models/example.js';

const router = express.Router();

export const example = async (req, res) => {
    try {
        console.log(chalk.greenBright('Example route hit!'));
        res.status(200).json({ message: 'Example' });
    } catch (error) {
        console.log(chalk.redBright(error.message));
    }
}