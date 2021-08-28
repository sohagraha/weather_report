document.getElementById('btnId').addEventListener('click', function () {
    const city = document.getElementById('inputId').value;
    document.getElementById('inputId').value = '';
    const API = "ea7544e1068bb100fa8f971674630140";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
        .then(res => res.json())
        .then(data => loadDetails(data));
})

loadDetails = data => {
    let temp = data.main.temp;
    temp = temp - 273;
    console.log(data);
    document.getElementById('city').innerText = data.name;
    document.getElementById('country').innerText = data.sys.country;
    document.getElementById('temp').innerText = temp.toFixed(2);
    document.getElementById('weather').innerText = data.weather[0].main;
}