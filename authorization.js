var express=require('express')
var jwt=require('jsonwebtoken')
var app=express()
app.get('/api',(req,res)=>{
    res.json({
        message:"welcome to api"
    })
})
app.post('/api/posts',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){
            res.sendStatus(403)
        }
        else{
            res.json({
                message:"Post created...",
                authData
            })
        }
    })
})
app.post('/api/login',(req,res)=>{
    const user={
        id:112,
        name:"vishal",
        email:"vishal12@gmail.com"
    }
    jwt.sign({user},"secretkey",{expiresIn:'30s'},(err,token)=>{
        res.json({
            token
        })
    })
})
function verifyToken(req,res,next){
    const bearerHeader=req.headers['authorization']
    if(typeof bearerHeader!='undefined')
    {
        const bearer=bearerHeader.split(' ')
        const bearerToken=bearer[1];
        req.token=bearerToken
        next()
    }
    else{
        res.sendStatus(403)
    }
}
app.listen(1111,()=>{
   console.log("Server Started...")
})