function excute(data) {
  console.log(document.getElementsByClassName(data));
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
};

function readMore() {
  document.getElementById("displayMore").style.display = "block";
  document.getElementById("read").style.display = "none";
}
