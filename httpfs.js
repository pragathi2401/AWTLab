var fs=require('fs');
var http=require('http');
var server=http.createServer(function(req,res){
  if(req.url=="/")
  {
      fs.readFile("test.txt",(err,data)=>{
          res.write(data);
          res.end();
      })
  }
})
server.listen(3000,()=>{
  console.log("Server Started...")
});