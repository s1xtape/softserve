getIt.onclick = function (){
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityIn.value+'&appid='+APIKey;
    fetch(url).then(function (resp) {return resp.json() }).then(function (data) {
        const str1 = "Название города - " + data.name + ";<br \/>Текущая температура - " + Math.round(data.main.temp - 273) + " c<br \/>Ощущаеться как - " + Math.round(data.main.feels_like - 273)
        + " c<br \/>Давление - " + data.main.pressure + " hPa<br \/>влажность - " + data.main.humidity + "%";
        document.getElementById('result').innerHTML = str1;
    })
    .catch(function () {
    });
}
const APIKey = '73491a7a149c1439db23cd7aa94de9e6';