const express=require('express');
const cors=require('cors');
const app=express();
const formRoutes=require('./routes/formRoutes');
app.use(cors());
app.use(express.json());
app.use('/forms',formRoutes);
app.listen(3000,()=>{
    console.log("server started");
})
module.exports=app;