async function weather(){
    var city=document.getElementById("city");
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city.value+"&appid=3130bcfe2a84044fbbd2f270bba00a6d&units=imperial";
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    let{name,main:{temp}}=data;
    console.log("City Name: "+name+" , Temperature : "+temp);
    document.getElementById("result").innerHTML="Temperature is: "+temp;
}
