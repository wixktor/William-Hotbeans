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

// change background colour

$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 3800) {
      $("body").css("background-color", "white");
      $(".join").css("color", "#1a1a1a");
      $(".join-svg").css("fill", "#1a1a1a");
    } else {
      $("body").css("background-color", "#1a1a1a");
      $(".join").css("color", "white");
      $(".join-svg").css("fill", "white");
    }
  });
});

// change background colour on mobile

$(window).resize(function () {
  if ($(window).width() < 500) {
    $(document).ready(function () {
      var scroll_pos = 0;
      $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 4300) {
          $("body").css("background-color", "white");
          $(".join").css("color", "#1a1a1a");
          $(".join-svg").css("fill", "#1a1a1a");
        } else {
          $("body").css("background-color", "#1a1a1a");
          $(".join").css("color", "white");
          $(".join-svg").css("fill", "white");
        }
      });
    });
  }
});