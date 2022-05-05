var express=require('express')
var fs=require('fs')
var app=express()
app.use(express.json())
app.get('/stf',(req,res)=>{
    fs.readFile('faculty.json',(err,data)=>{
        res.send(data);
    })
})
app.get('/staff1',(req,res)=>{
    let myrf=fs.createReadStream(__dirname+"/Welcome.html",'utf-8');
    myrf.pipe(res);
})
app.post('/addstf',(req,res)=>{
    const newstf={
        id:req.body.id,
        name:req.body.name,
        loc:req.body.loc
    }
    fs.readFile('faculty.json',(err,data)=>{
        var sdata=JSON.parse(data);
        sdata.push(newstf);
        fs.writeFile('faculty.json',JSON.stringify(sdata),(err,data)=>{
            console.log("Staff data inserted");
        })
    })
    res.send("Staff data inserted")
})
app.put('/updatestf/:id',(req,res)=>{
    var id=req.body.id;
    fs.readFile('faculty.json',(err,data)=>{
        var sdata=JSON.parse(data)
        for(let i in sdata)
        {
            if(id==sdata[i]['id'])
            {
                sdata[i]['id']=req.body.id;
                sdata[i]['name']=req.body.name;
                sdata[i]['loc']=req.body.loc;
                fs.writeFile('faculty.json',JSON.stringify(sdata),(err,data)=>{
                    console.log("Updated");
                })
            }

        }
       res.send("Staff data updated");
    })
})
app.delete('/delstf/:id',(req,res)=>{
    var id=req.body.id;
    fs.readFile('faculty.json',(err,data)=>{
        var sdata=JSON.parse(data);
        for(i in sdata)
        {
            if(id==sdata[i]['id'])
            {
                sdata.splice(i,1);
                fs.writeFile('faculty.json',JSON.stringify(sdata),(err,data)=>{
                    console.log("Deleted");
                })
            }
        }
        res.send("Staff data deleted"); 
    })    
    
})
app.listen(1263,()=>{
    console.log("Server started....");
})