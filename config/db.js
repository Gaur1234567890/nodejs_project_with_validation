const express = require('express')
const env = require('dotenv')
const mongoose = require('mongoose')
env.config()

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.cxwdwkr.mongodb.net/`).then(d=>{
    console.log('connected to the databases')
}).catch(e=>{
    console.log('error to connect',e);
})

module.exports = {mongoose}