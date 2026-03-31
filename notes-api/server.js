const express=require('express');
const app=express();
const notesRoutes=require('./routes/notesRoutes');//mapping between path and functions
console.log('errorrr',notesRoutes);
app.use(express.json());
app.use('/notes',notesRoutes);//middleware
app.listen(3001,()=>{
    console.log('server started');
})

module.exports=app;