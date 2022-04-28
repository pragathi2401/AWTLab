var event=require('events');
var em=new event.EventEmitter();
var my_func=function(){
    console.log("Click Event is generated");
}
em.on("click",my_func);
em.emit("click");
