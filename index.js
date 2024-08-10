const apiKey="c606a04e6d8c5725403688871365d36a";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function checkweather(city){
    const response=await fetch(apiURL+ city+`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
        console.log(data);
        
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +" Km/h";
    
        if(data.weather[0].main=="clouds"){
    
          weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png";
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
       
        
    
    
       
    }
    }
    
searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})

