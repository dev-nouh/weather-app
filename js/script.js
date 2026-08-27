let searchInput = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
 let city = document.querySelector(".city");
 let image = document.querySelector(".weather img");
 let temp = document.querySelector(".temp");
 let humidity = document.querySelector(".humidity");
 let wind = document.querySelector(".wind");
async function weather(cityName) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c98354bf86de0a46acff9b6578979fc2&units=metric`);
    let finalResponse= await response.json();
    console.log(finalResponse);
    if(response.ok){
            city.innerHTML = finalResponse.name;
    temp.innerHTML = Math.round(finalResponse.main.temp) + "°C";
    humidity.innerHTML = finalResponse.main.humidity + "%";
    wind.innerHTML = Math.round(finalResponse.wind.speed) + " km/h";
    image.src =`images/${finalResponse.weather[0].main}.png`;
    document.querySelector('.weather').style.display = "block";
    document.querySelector('.falseInput').style.display = "none";
    }else if(searchInput.value.trim() === ""){
        document.querySelector('.falseInput').innerHTML= "please choose a city";
    }else{
        document.querySelector('.falseInput').innerHTML= "City not found";
        document.querySelector('.weather').style.display = "none";
        document.querySelector('.falseInput').style.display = "block";
    }

}
searchBtn.addEventListener("click" , function(){
    weather(searchInput.value);
}); 

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});