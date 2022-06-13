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

function drawWeather(d) {
  var celcius = Math.round(parseFloat(d.main.temp) - 273.15);

  document.getElementById("temp").innerHTML = celcius + "&deg;";
}

window.onload = function () {
  weatherBallon(6167865);
};

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
