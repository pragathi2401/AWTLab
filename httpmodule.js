var http=require('http');
var server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
        res.write("<h1>Welcome to student details web page</h1>");
        res.end();
    }
    if(req.url=='/ita')
    {
        res.write("<b>Student roll numbers are in range 1 to 60</b>");
        res.end();
    }
    if(req.url=='/itb')
    {
        res.write("<b>Student roll numbers are in range 61 to C0</b>");
        res.end();
    }

})
server.listen(1200,(err,data)=>{
    console.log("Server started...");
})