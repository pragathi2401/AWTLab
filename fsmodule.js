var fs=require('fs');
fs.readFile('sample.txt',(err,data)=>{
    //console.log(data);
    console.log(data.toString());
})
fs.writeFile('sample.txt',"Welcome from IT Dept",(err,data)=>{
    console.log("Data Inserted");
})
fs.appendFile('sample.txt'," , CVR",(err,data)=>{
    console.log("Data Appended");
})
fs.rename('sample.txt','test.txt',(err)=>{
    console.log("File renamed");
})
fs.unlink('test.txt',(err,data)=>{
    console.log("File removed");
})