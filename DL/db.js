// import mongoose from 'mongoose'
const mongoose = require('mongoose')
const MONGO_URL = "mongodb+srv://Admin:Admin123@cluster0.zyg0zzq.mongodb.net/test1?retryWrites=true&w=majority"

// exports.connect = ()=> {}
async function connect() {
    try {
        await mongoose.connect(MONGO_URL,
            (err) => {
                if (err) throw err;

                console.log("DB : Connection Success!");
            })

    }
    catch (err) {
        console.log("DB Error: ", err.message);
    }
}


exports.myConnect = connect
