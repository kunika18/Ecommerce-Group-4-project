const express = require("express");
const mongoose = require("mongoose");
const PORT = 3002;
const app = express();
const userRoutes = require('./route/user');
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

const mongoConnection = async()=>{             // used async to work API smoothly
    try {
    await mongoose.connect("mongodb://127.0.0.1:27017/backend", {

    });
    console.log("Connected to Database");
    }

    catch(error) {
       console.log("error in connection to db:",error)
    }
};
mongoConnection();

app.use('/api/user', userRoutes);