
document.getElementById("form").addEventListener("submit", async (e) => {

    e.preventDefault()

    const input = document.getElementById("input").value;
    const temperature = document.getElementById("temperature")
    const city = document.getElementById("city")
    const img = document.getElementById("img")
    const notfound = document.getElementById("not-found")

    try {

        const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=763f891ebf5d026ae600cba383a226ab&units=metric`)
        const data = await weather.json();

        const humidity = document.getElementById("humidity");
        const humidityName = document.getElementById("humidity-name");
        const humidityImg = document.getElementById("humidity-img");

        const speed = document.getElementById("speed");
        const speedName = document.getElementById("speed-name");
        const speedImg = document.getElementById("speed-img");


        if (data.cod === "404") {
            notfound.textContent = "No city found"
            temperature.textContent = ""
            city.textContent = ""
            img.style.display = "none"

            humidity.textContent = "";
            humidityName.textContent = "";

            speed.textContent = "";
            speedName.textContent = "";

            humidityImg.src = "";
            speedImg.src = "";

        } else {

            temperature.textContent = `${data.main.temp}  °C`
            city.textContent = `${data.name}`
            img.src = "img/clouds.png"
            img.style.display = ""
            notfound.textContent = ""

            humidity.textContent = `${data.main.humidity}%`;
            humidityName.textContent = "Humidity";

            speed.textContent = `${data.wind.speed} km/h`;
            speedName.textContent = "Wind Speed";

            humidityImg.src = "img/humidity.png";
            speedImg.src = "img/wind-speed.png";
        }

    } catch (error) {
        console.log("error", error)

        notfound.textContent = "no city found"
    }


})