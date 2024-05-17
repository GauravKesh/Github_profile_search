
const express =require("express");
const port =9000;
const app = express();
const cors = require("cors");


app.get("/profile",async(req,res)=>{
    const resp =await fetch("https://api.github.com/users/GauravKesh")

}
