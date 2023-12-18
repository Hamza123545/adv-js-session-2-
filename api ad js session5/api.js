let city=document.getElementById("city");
let type=document.getElementById("type");
let temp=document.getElementById("temp");
let image=document.getElementById("img");
let input=document.getElementById("inp");


let api_key="d081dd9511e36a650a00788a02ce2e28"

//fetch

const data=async function(search){
    let getData=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api_key}&units=metric`);

    console.log(getData);

    let jsondata=await getData.json();
    console.log(jsondata);
    console.log(jsondata.name);

    city.innerHTML=jsondata.name;
    temp.innerHTML=Math.floor(jsondata.main.temp)+"°C";
    type.innerHTML=jsondata.weather[0].main;

};

function myFun() {
    search=input.ariaValueMax;
    data(search);
}