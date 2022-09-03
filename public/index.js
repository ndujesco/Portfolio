const pages = ["home", "about", "work", "contact"];

const isNotLaptop = window.matchMedia("(max-width: 768px)").matches;
if (!isNotLaptop) {
  document.querySelector("ul.menu-items").style.backgroundColor = "";
}

function clickCheck() {
  const isChecked = document.getElementById("Checkbox").checked;
  const content = document.getElementById("fullPage");
  isChecked && content.classList.add("content");
  !isChecked && content.classList.remove("content");

  const splitClass = document.body.classList.value.split(" ");
  let spreadParam = [];
  splitClass.forEach((elem) => {
    const splitElem = elem.split("-");
    spreadParam.push(...splitElem);
  });
  const page = spreadParam.find((elem) => pages.includes(elem));
  const pageColor =
    document.getElementsByClassName(page)[0].style.backgroundColor;
  const isNotLaptop = window.matchMedia("(max-width: 768px)").matches;

  document.querySelector("ul.menu-items").style.backgroundColor = isNotLaptop
    ? pageColor
    : "";
  !isChecked && setTimeout(removeBackground, 600);
  // !isChecked && removeBackground();
}

function unCheck() {
  document.getElementById("Checkbox").checked = false;
  const content = document.getElementById("fullPage");
  content.classList.remove("content");
  setTimeout(removeBackground, 600);
}

function removeBackground() {
  document.querySelector("ul.menu-items").style.backgroundColor = "";
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Hi, I'm Ugochukwu", "Backend developer", "Undergraduate"];
const typingDelay = 100;
const erasingDelay = 80;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
