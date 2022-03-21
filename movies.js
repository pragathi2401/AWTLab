async function movies(){
    const url="https://imdb-api.com/API/AdvancedSearch/k_5tka2m06?user_rating=8.5,10&release_date=2000-01-01,2022-01-01&genres=thriller&languages=te";
    const response=await fetch(url);
    var data=await response.json();
    console.log(data);
    var table='<table id="mytable" border="1" cellpadding="2">';
    table+='<tr><th>Name</th><th>Rating</th><th>Stars</th></tr>';
    let{results}=data;
    results.forEach(element=>{
         let{title,imDbRating,stars}=element;
         table+='<tr>';
         table+='<td>'+title+'</td>';
         table+='<td>'+imDbRating+'</td>'
         table+='<td>'+stars+'</td>';
         table+='</tr>';
    })
    table+='</table>';
    document.getElementById("result").innerHTML=table;
}