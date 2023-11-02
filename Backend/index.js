const express = require('express');
const mongoose = require('mongoose');
const cors=require("cors");
const dotenv = require('dotenv')
const bodyParser=require("body-parser");
const motor = require('./Routes/motorRouter');
const userRoute = require('./Routes/UserRouter')
const invoiceRoutes = require('./Routes/invoiceRoute');
const corsOptions={origin:"*",credentials:true,optionSuccessStatus:200};
dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

app.use(cors(corsOptions));

//KontMp3joUioDorE

// Connect to MongoDB
const mongooseOptions={
    useNewUrlParser:true,
    useUnifiedTopology:true
};

mongoose.connect(process.env.MongoURI, mongooseOptions,err=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Connected to MongoDB")
    }
});

app.use('/api/motor', motor);
app.use('/api/user', userRoute)
app.use('/api/invoices', invoiceRoutes);

app.get("/",(req,res)=>{
    res.status(200).json({
        team_name:"Mesho Devs",dev_team:["Mesho","Mesho254"].sort()})
    });
    
app.use("*",(req,res)=>{
    res.status(500).json({status:"error",message:"This route does not exist"})
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
