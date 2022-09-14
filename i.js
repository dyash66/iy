const app=require("express")();
const PORT=process.env.PORT || 3000;
app.get("",(req,res)=>{
    res.send("yaswanthini from SpTeam 3");
});
app.listen(PORT, ()=>{
    console.log('app up at port ${PORT}');
});
