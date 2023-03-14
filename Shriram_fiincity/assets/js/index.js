window.onload = function () {
  let input = document.getElementById("phone");
  window.intlTelInput(input, {
    separateDialCode: true,
    initialCountry: "in",
  });

  let input2 = document.getElementById("phoneNumber");
  window.intlTelInput(input2, {
    separateDialCode: true,
    initialCountry: "in",
  });
};

function excute(data) {
  return;
}

function readMore() {
  document.getElementById("displayMore").style.display = "block";
  document.getElementById("read").style.display = "none";
}

function readMoretwo() {
  document.getElementById("displayMoreTwo").style.display = "block";
  document.getElementById("readTwo").style.display = "none";
}

window.addEventListener(
  "load",
  (event) => {
    $(".clicker").click(function () {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(this).find(".containerDivMain").slideUp(500);
      } else {
        $(".clicker").find(".containerDivMain").slideUp(500);
        $(".clicker").removeClass("open");
        $(this).addClass("open");
        $(this).find(".containerDivMain").slideDown(500);
      }
    });
  },
  false,
);

window.addEventListener(
  "load",
  (event) =>
    setTimeout(() => {
      document.getElementById("modal").style.display = "block";
      let blur = document.querySelectorAll("body > *:not(#modal");
      blur.forEach((blurElem) => {
        blurElem.style.filter = "blur(5px)";
        blurElem.style.pointerEvents = "none";
      });
    }, 1000),
  false,
);

function closeModal() {
  document.getElementById("modal").style.display = "none";
  let blur = document.querySelectorAll("body > *:not(#modal");
  blur.forEach((blurElem) => {
    blurElem.style.filter = "blur(0px)";
    blurElem.style.pointerEvents = "all";
  });
}

function openApi(event) {
  event.stopPropagation();

  let body = {
    phone:
      document.getElementById("phoneNumber")?.value ||
      document.getElementById("phone")?.value,
    name:
      document.getElementById("Name")?.value ||
      document.getElementById("name")?.value,
    propjectId: 22,
    projectConfig: "",
    subSourceId: "",
    campaignCode: "",
    email:
      document.getElementById("Email")?.value ||
      document.getElementById("email")?.value,
  };
  let url = new URL(window?.location?.href);
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  fetch("http://api-dcrm-stage.fincity.in/open/opportunity", {
    method: "POST",
    headers: headers,
    body: JSON.stringify(body),
    redirect: "follow",
  })
    .then((response) => response?.json())
    .then((res) => {
      console.log("success", res);
    })
    .catch((err) => {
      console.log(err);
    });
  if (url.searchParams.entries.length == 0) return;
  const utm_source = url?.searchParams("utm_source");
  const utm_campaign = url?.searchParams("utm_campaign");
  const utm_medium = url?.searchParams("utm_medium");
  const utm_content = url?.searchParams("utm_content");
  const utm_terms = url?.searchParams("utm_terms");

  console.log(utm_source, utm_campaign, utm_medium, utm_content, utm_terms);

  console.log(body);

  fetch("https://api-dcrm-stage.fincity.in/open/opportunity", {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "origin-when-cross-origin",
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log("success", res);
    })
    .catch((err) => {
      console.log(err);
    });
}

const options = {
  useEasing: true,
  useGrouping: true,
  separator: ",",
  decimal: ".",
  decimalPlaces: 1,
};

options1 = {
  useEasing: true,
  useGrouping: true,
  separator: ",",
  useIndianSeparators: true,
};

function animateValue(id, end, round) {
  const counter = new countUp.CountUp(id, end, round ? options : options1);
  counter.start();
}

window.addEventListener(
  "load",
  (event) => {
    observer.observe(document.querySelector(".section4"));
    observer.observe(document.querySelector(".section2"));
    observer.observe(document.querySelector(".section2Mobile"));
  },
  false,
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry?.isIntersecting) {
        let chart = document.getElementById("chart");
        if (Chart.getChart(chart)) Chart.getChart(chart).destroy();
        load(entry.target.className);
      } else return;
    });
  },
  { threshold: 0.75 },
);

function load(val) {
  if (val == "section2" || val == "section2Mobile") {
    animateValue("count1", 2.5, true);
    animateValue("count2", 511, false);
    animateValue("count3", 267273, false);
    animateValue("count4", 2.5, true);
    animateValue("count5", 511, false);
    animateValue("count6", 267273, false);
  } else {
    check =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    var xyValues = check ? [75, 80, 94, 97] : [71, 75, 75, 80, 93, 94, 98, 97];
    var labels = check
      ? [2016, 2018, 2020, "2022H2"]
      : [2015, 2016, 2017, 2018, 2019, 2020, 2021, "2022H2"];

    new Chart("chart", {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            pointBackgroundColor: "#e7641f",
            data: xyValues,
            fill: false,
            tension: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        responsive: true,
        scales: {
          x: {
            offset: true,
            ticks: {
              min: 2015,
              max: "2022H",
            },
            grid: {
              offsetGridLines: true,
              display: false,
            },
          },

          y: {
            title: {
              display: true,
              text: "Per Sq. Ft. Rental",
              font: {
                size: check ? 12 : 16,
              },
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              min: 60,
              max: 100,
              stepSize: 10,
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }
}
