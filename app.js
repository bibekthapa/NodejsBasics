var express=require('express')
app=express()
var port=3000;

app.use(express.static("public"));
app.get("/",function(req,res){

	res.sendFile("index.html");

});
console.log("The server is listening at"+port);
app.listen(port);