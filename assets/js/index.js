function excute(data) {
  if (data == "one") {
    document.getElementById("one").style.display =
      document.getElementById("one").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("one")[0].style.display =
      document.getElementsByClassName("one")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("oneIcon").style.display =
      document.getElementById("one").style.display == "block"
        ? "none"
        : "block";
  } else if (data == "two") {
    document.getElementById("two").style.display =
      document.getElementById("two").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("two")[0].style.display =
      document.getElementsByClassName("two")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("twoIcon").style.display =
      document.getElementById("two").style.display == "block"
        ? "none"
        : "block";
  } else if (data == "three") {
    document.getElementById("three").style.display =
      document.getElementById("three").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("three")[0].style.display =
      document.getElementsByClassName("three")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("threeIcon").style.display =
      document.getElementById("three").style.display == "block"
        ? "none"
        : "block";
  } else if (data == "four") {
    document.getElementById("four").style.display =
      document.getElementById("four").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("four")[0].style.display =
      document.getElementsByClassName("four")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("fourIcon").style.display =
      document.getElementById("four").style.display == "block"
        ? "none"
        : "block";
  } else if (data == "five") {
    document.getElementById("five").style.display =
      document.getElementById("five").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("five")[0].style.display =
      document.getElementsByClassName("five")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("fiveIcon").style.display =
      document.getElementById("five").style.display == "block"
        ? "none"
        : "block";
  } else if (data == "one1") {
    document.getElementById("one1").style.display =
      document.getElementById("one1").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("one1")[0].style.display =
      document.getElementsByClassName("one1")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("one1Icon").style.display =
      document.getElementById("one1").style.display == "block"
        ? "none"
        : "block";
  } else if (data == "two2") {
    document.getElementById("two2").style.display =
      document.getElementById("two2").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("two2")[0].style.display =
      document.getElementsByClassName("two2")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("two2Icon").style.display =
      document.getElementById("two2").style.display == "block"
        ? "none"
        : "block";
  } else if (data == "three3") {
    document.getElementById("three3").style.display =
      document.getElementById("three3").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("three3")[0].style.display =
      document.getElementsByClassName("three3")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("three3Icon").style.display =
      document.getElementById("three3").style.display == "block"
        ? "none"
        : "block";
  } else if (data == "four4") {
    document.getElementById("four4").style.display =
      document.getElementById("four4").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("four4")[0].style.display =
      document.getElementsByClassName("four4")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("four4Icon").style.display =
      document.getElementById("four4").style.display == "block"
        ? "none"
        : "block";
  } else if (data == "five5") {
    document.getElementById("five5").style.display =
      document.getElementById("five5").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("five5")[0].style.display =
      document.getElementsByClassName("five5")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("five5Icon").style.display =
      document.getElementById("five5").style.display == "block"
        ? "none"
        : "block";
  } else if (data == "six6") {
    document.getElementById("six6").style.display =
      document.getElementById("six6").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("six6")[0].style.display =
      document.getElementsByClassName("six6")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("six6Icon").style.display =
      document.getElementById("six6").style.display == "block"
        ? "none"
        : "block";
  } else if (data == "seven7") {
    document.getElementById("seven7").style.display =
      document.getElementById("seven7").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("seven7")[0].style.display =
      document.getElementsByClassName("seven7")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("seven7Icon").style.display =
      document.getElementById("seven7").style.display == "block"
        ? "none"
        : "block";
  } else if (data == "eight8") {
    document.getElementById("eight8").style.display =
      document.getElementById("eight8").style.display == "block"
        ? "none"
        : "block";
    document.getElementsByClassName("eight8")[0].style.display =
      document.getElementsByClassName("eight8")[0].style.display == "block"
        ? "none"
        : "block";
    document.getElementById("eight8Icon").style.display =
      document.getElementById("eight8").style.display == "block"
        ? "none"
        : "block";
  }
}

// let input = document;
// console.log(input);
// window.intlTelInput(input, {
//   separateDialCode: true,
//   initialCountry: "in",
// });

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

function readMore() {
  document.getElementById("displayMore").style.display = "block";
  document.getElementById("read").style.display = "none";
}

function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}

const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;
let increasingColor = "rgba(40, 40, 190, ratio)";
let decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up
window.addEventListener(
  "load",
  (event) => {
    observer.observe(document.querySelector(".section1"));
    observer.observe(document.querySelector(".section2"));
    observer.observe(document.querySelector(".section2Mobile"));
    observer.observe(document.querySelector(".itemone"));
    observer.observe(document.querySelector(".itemtwo"));
    observer.observe(document.querySelector(".mapSection"));
    observer.observe(document.querySelector(".section4"));
    observer.observe(document.querySelector(".faqSection"));
    observer.observe(document.querySelector(".section5"));
  },
  false,
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry?.isIntersecting) {
        entry?.target?.classList.add("animate__animated", "animate__fadeIn");
        // document
        //   .getElementsByClassName(entry?.target?.classList?.value)[0]
        //   .style.setProperty("--animate-duration", "0.5s");
      } else
        entry?.target?.classList.remove("animate__animated", "animate__fadeIn");
    });
  },
  { threshold: 0.75 },
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

  let b = {};
  let url = new URL(window?.location?.href);
  fetch("https://api-dcrm-stage.fincity.in/open/opportunity", {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "origin-when-cross-origin",
    body: JSON.stringify(b),
  })
    .then((response) => response.json())
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

  let body = {
    phone: document.getElementById("phoneNumber")?.value,
    name: document.getElementById("name")?.value,
    propjectId: 22,
    projectConfig: "",
    subSourceId: "",
    campaignCode: "",
    email: document.getElementById("email")?.value,
    metadata: {
      utm_source: utm_source || 0,
      utm_campaign: utm_campaign || 0,
      utm_content: utm_content || 0,
      utm_medium: utm_medium || 0,
      utm_terms: utm_terms || 0,
    },
  };

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
