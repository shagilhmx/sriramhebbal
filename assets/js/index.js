function excute(data, e) {
  console.log(e);
  if (data === "one") {
    document.getElementById("two").style.display = "none";
    document.getElementById("one").style.display = "block";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "none";
    document.getElementById("seven").style.display = "none";
    document.getElementById("eight").style.display = "none";
  } else if (data === "two") {
    document.getElementById("two").style.display = "block";
    document.getElementById("one").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "none";
    document.getElementById("seven").style.display = "none";
    document.getElementById("eight").style.display = "none";
  } else if (data === "three") {
    document.getElementById("two").style.display = "none";
    document.getElementById("one").style.display = "none";
    document.getElementById("three").style.display = "block";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "none";
    document.getElementById("seven").style.display = "none";
    document.getElementById("eight").style.display = "none";
  } else if (data === "four") {
    document.getElementById("two").style.display = "none";
    document.getElementById("one").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "block";
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "none";
    document.getElementById("seven").style.display = "none";
    document.getElementById("eight").style.display = "none";
  } else if (data === "five") {
    document.getElementById("two").style.display = "none";
    document.getElementById("one").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "block";
    document.getElementById("six").style.display = "none";
    document.getElementById("seven").style.display = "none";
    document.getElementById("eight").style.display = "none";
  } else if (data === "six") {
    document.getElementById("two").style.display = "none";
    document.getElementById("one").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "block";
    document.getElementById("seven").style.display = "none";
    document.getElementById("eight").style.display = "none";
  } else if (data === "seven") {
    document.getElementById("two").style.display = "none";
    document.getElementById("one").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "none";
    document.getElementById("seven").style.display = "block";
    document.getElementById("eight").style.display = "none";
  } else {
    document.getElementById("two").style.display = "none";
    document.getElementById("one").style.display = "none";
    document.getElementById("three").style.display = "none";
    document.getElementById("four").style.display = "none";
    document.getElementById("five").style.display = "none";
    document.getElementById("six").style.display = "none";
    document.getElementById("seven").style.display = "none";
    document.getElementById("eight").style.display = "block";
  }
}
