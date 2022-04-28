var http=require('http');
var fs=require('fs');
var url=require('url');
let result;
function write(result){
     fs.writeFile('Student.json',JSON.stringify(result),(err)=>{
         console.log(err);
     })
}
var server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
      res.write("<h1>Welcome to student data web page</h1>");
      res.end();
    }
    if(req.url=='/stddata'&& req.method=='GET')
    {
        fs.readFile('Student.json',function(err,data){
            res.end(data);
        });
    }
    if(req.method=='POST')
    {
        const newstd=url.parse(req.url,true).query;
        console.log(newstd);
        fs.readFile('Student.json',function(err,data){
          result=JSON.parse(data);
          let index=result.length;
          result[index]=newstd;
          console.log(result);
          write(result);
          res.write("<h1>Student data inserted</h1>")
          res.end();
        });
    }
    if(req.method=='PUT')
    {
        const upstd=url.parse(req.url,true).query;
        fs.readFile('Student.json',function(err,data){
          result=JSON.parse(data);
          for(i in result){
              if(upstd['id']==result[i]['id'])
              {
                result[i]['id']=upstd['id'];
                result[i]['name']=upstd['name'];
                result[i]['branch']=upstd['branch'];
                write(result);
                res.write("<h1>Student details are updated</h1>");
                res.end();
              }
          }
        })
    }
    if(req.method=='DELETE'){
        const delstd=url.parse(req.url,true).query;
        fs.readFile('Student.json',function(err,data){
            result=JSON.parse(data);
            for(i in result){
                if(delstd['id']==result[i]['id']){
                    result.splice(i,1);
                    write(result);
                    res.write("<h1>Student record is deleted");
                    res.end();
                }
            }
        })
    }
})
server.listen(1143,()=>{
   console.log("Server Started....");
})

