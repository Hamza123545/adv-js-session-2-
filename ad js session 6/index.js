let city=document.getElementById("city");
let type=document.getElementById("type");
let temp=document.getElementById("temp");
let image=document.getElementById("img");


let input=document.getElementById("inp");

let api_key="d081dd9511e36a650a00788a02ce2e28";





const data=async function(search)
{
    

    let getData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`);
    console.log(getData);

    let jsondata=await getData.json();

    console.log(jsondata);
    console.log(jsondata.name);

    if(jsondata.cod == 400){
        alert("Please enter any location")
        image.src="400eror.jpeg"
    }

    if(jsondata.cod == 404){
        alert("Please enter correct speeling")
        image.src="000-404.png"
    }

    input.value=""

    city.innerHTML=jsondata.name;
    temp.innerHTML=Math.floor(jsondata.main.temp)+"°C";
    type.innerHTML=jsondata.weather[0].main;

// image changing work

if (type.innerHTML == "Clouds") {
    image.src="cloud.jpg"
} 
else if (type.innerHTML == "clear"){
    image.src="clear.jpg"
}    
else if (type.innerHTML == "Rain"){
    image.src="rain.jpg"
}    

else if (type.innerHTML == "Snow"){
    image.src="snow.jpg"
}    

else if (type.innerHTML == "Smoke"){
    image.src="smoke.jpg"
}    
else if (type.innerHTML == "Haze"){
    image.src="haze.jpg"
}    
else if (type.innerHTML == "Storm"){
    image.src="storm.jpg"
}    

input.value=""



    
}


function myFun(){
    search=input.value;
    data(search);
}