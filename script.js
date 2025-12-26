let btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    document.querySelector("h1").style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.querySelector("h1").style.color = "white";
  }
});
