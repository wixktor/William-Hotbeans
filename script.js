// fetch weather from API

function weatherBallon() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=london,england&APPID=8400cd76acb7e1e4958b70064d3cf2bd"
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      drawWeather(data);
    })
    .catch(function () {
      // catch any errors
    });
}

// show weather from api

function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);

  document.getElementById("temp").innerHTML = celcius + "&deg;";
}

window.onload = function () {
  weatherBallon(6167865);
};

// animate image carousel

var animation = { duration: 25000, easing: (t) => t };

var slider = new KeenSlider("#my-keen-slider", {
  loop: true,
  renderMode: "performance",
  drag: true,
  breakpoints: {
    "(min-width: 400px)": {
      slides: {
        perView: 1,
        spacing: 222,
      },
    },
    "(min-width: 1000px)": {
      slides: {
        perView: 2,
        spacing: 222,
      },
    },
  },
  slides: {
    perView: 1,
    spacing: 222,
  },
  created(s) {
    s.moveToIdx(5, true, animation);
  },
  updated(s) {
    s.moveToIdx(s.track.details.abs + 5, true, animation);
  },
  animationEnded(s) {
    s.moveToIdx(s.track.details.abs + 5, true, animation);
  },
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 3674 ||
    document.documentElement.scrollTop > 3674
  ) {
    document.getElementById("bg").style.background = "#fff";
    document.getElementById("bg-h2").style.color = "#000";
    document.getElementById("bg-title").style.color = "#000";
    document.getElementById("bg-a").style.color = "#000";
    document.getElementById("bg-svg").style.fill = "#000";
    document.getElementById("bg-svg2").style.fill = "#000";
  } else {
    document.getElementById("bg").style.background = "#1a1a1a";
    document.getElementById("bg-h2").style.color = "#fff";
    document.getElementById("bg-title").style.color = "#fff";
    document.getElementById("bg-a").style.color = "#fff";
    document.getElementById("bg-svg").style.fill = "#fff";
    document.getElementById("bg-svg2").style.fill = "#fff";
  }
}

anime({
  targets: ".nav-bar",
  opacity: [0, 1],
  delay: 300,
});