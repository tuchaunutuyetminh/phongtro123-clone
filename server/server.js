import express from "express";
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes/index'
import connectDatabase from "./src/config/connectDatabase";

const app = express()
app.use(cors({
    origin: process.env.CIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true}))


initRoutes(app)
connectDatabase()
const port = process.env.PORT || 8888

const listener = app.listen(port, () => { 
    console.log('Server is running on port ', listener.address().port)
 })