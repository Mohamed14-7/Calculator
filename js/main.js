let buttons = document.querySelectorAll("button");

let counter = 0;

let isFirstClick = false;

// plus
let plus = document.querySelector(".plus");

// multiply
let multiply = document.querySelector(".multiply");

// subtract
let subtract = document.querySelector(".subtract");

// divider
let divider = document.querySelector(".divider");

// eaul
let equlSign = document.querySelector(".equlSign");

// dot
let dot = document.querySelector(".dot");

// show screen
let show = document.querySelector(".show");

// Clear Screen
let clearbtn = document.querySelector(".clear");

// Delete
let deletebtn = document.querySelector(".delete");

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    // clear btn
    if (element === clearbtn) {
      show.textContent = "";
      counter = 0;
      isFirstClick = false;
    }
    //  delete last num
    else if (element === deletebtn) {
      show.textContent = show.textContent.slice(0, show.textContent.length - 1);
      counter = 0;
    }
    // Plus btn
    else if (element === plus) {
      show.textContent += "+";
      counter = 0;
      isFirstClick = false;
    }
    // Divider btn
    else if (element === divider) {
      show.textContent += "/";
      counter = 0;
      isFirstClick = false;
    }
    // Subtract btn
    else if (element === subtract) {
      show.textContent += "-";
      counter = 0;
      isFirstClick = false;
    }
    // Multiply btn
    else if (element === multiply) {
      show.textContent += "*";
      counter = 0;
      isFirstClick = false;
    }
    // Equal Btn
    else if (element === equlSign) {
      show.textContent = eval(show.textContent);
      counter = 0;
      isFirstClick = false;
    }
    // Dot btn
    else if (element === dot) {
      if (!isFirstClick) {
        show.textContent += "0.";
        counter++;
        isFirstClick = true;
      }
      if (counter === 0) {
        show.textContent += ".";
        counter++;
      }
    }
    // Other btn
    else {
      show.innerHTML += element.innerHTML;
      isFirstClick = true;
    }
  });
});

// Keyborad
document.addEventListener("keydown", function (event) {
  if (
    (event.key >= "1" && event.key <= "9") ||
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    show.innerHTML += event.key;
  } else if (event.key === "=" || event.key === "Enter") {
    show.textContent = eval(show.textContent);
  }
});
