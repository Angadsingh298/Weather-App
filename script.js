const apiKey = "b40cd68477c357827392cce03610d736";
function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const result = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Temp: ${data.main.temp}°C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
        <p>🌈 Weather: ${data.weather[0].main}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      `;
      document.getElementById("weatherResult").innerHTML = result;
    })
    .catch((error) => {
      document.getElementById("weatherResult").innerHTML = "<p>City not found 😢</p>";
    });

    document.getElementById("weatherResult").classList.add("show");
}

const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggleButton.textContent = '🌕 Light Mode'; 
}

themeToggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggleButton.textContent = '🌕 Light Mode'; 
  } else {
    localStorage.setItem('theme', 'light');
    themeToggleButton.textContent = '🌙 Dark Mode'; 
  }
});
