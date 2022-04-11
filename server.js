const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(`${process.env.DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true }).then(async () => {
    console.log(`Connected to MongoDB Database at ${process.env.DATABASE}`);
})