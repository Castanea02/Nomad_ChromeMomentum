function onGeoOk(position) {
  //user 위치 찾기
  const lat = position.coords.latitude; //위도
  const lng = position.coords.longitude; //경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY.x}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //url요청 (promise)
}

function onGeoError() {
  console.log("Can't Find you No weather for you.");
}

//현재 위치, 날씨 갖고오기 함수
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
