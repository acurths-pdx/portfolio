// ------ Typewriter effect ------
const div1 = document.querySelector(".text1");
const div2 = document.querySelector(".text2");
const div3 = document.querySelector(".text3");
const div4 = document.querySelector(".text4");
const text = "$ whoami";
const text2 = "alicia_curths";
const text3 = "$ echo 'Welcome to my portfolio!'";
const text4 = "Welcome to my portfolio!";
const typingSpeed = 100;
const delayBetweenLines = 500;
function typeWriterEffect(element, text, i = 0) {
  if (i === 0) {
    element.textContent = "";
  }
  element.textContent += text[i];
  if (i === text.length - 1) {
    return;
  }
  setTimeout(() => typeWriterEffect(element, text, i + 1), typingSpeed);
}
typeWriterEffect(div1, text);
// Delay the start of each line based on the length of the previous lines and the typing speed
setTimeout(
  () => typeWriterEffect(div2, text2),
  text.length * typingSpeed + delayBetweenLines,
);
setTimeout(
  () => typeWriterEffect(div3, text3),
  (text.length + text2.length) * typingSpeed + 2 * delayBetweenLines,
);
setTimeout(
  () => typeWriterEffect(div4, text4),
  (text.length + text2.length + text3.length) * typingSpeed +
    3 * delayBetweenLines,
);

// ------ Back to top button ------
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
