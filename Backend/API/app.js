
//Defining all packages
const express = require('express');
const app = express();

//importing packages
const mongoose = require("./database/db");
const bodyParser = require("body-parser");
const cors = require("cors");
// add & configure  user  profile and invoice middleware
const UserInvoice = require("./routes/invoiceRouter");
const contactRouter = require("./routes/routes");

app.use(express.json());
// using middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// add & configure middleware
app.use('/',contactRouter);

app.use('/api',UserInvoice);


//listening server on port
app.listen(3000, () => {
    console.log("server started on 3000");
});