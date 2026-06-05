// ------ Typewriter effect ------

// Div elements for each line of text
const div1 = document.querySelector(".text1");
const div2 = document.querySelector(".text2");
const div3 = document.querySelector(".text3");
const div4 = document.querySelector(".text4");

// Text content for each line
const text1 = "$ whoami";
const text2 = "alicia_curths";
const text3 = "$ echo 'Welcome to my portfolio!'";
const text4 = "Welcome to my portfolio!";

// Typing speed and delay between lines
const typingSpeed = 100;
const delayBetweenLines = 500;

// Recursive function that creates the typewriter effect
function typeWriterEffect(element, text, i = 0) {
  element.textContent += text[i];
  if (i === text.length - 1) {
    return;
  }
  // Call the function again after a delay to type the next character
  setTimeout(() => typeWriterEffect(element, text, i + 1), typingSpeed);
}

// For each div, start the typewriter effect with appropriate delays
// Delay is length of previous text * typing speed + delay between lines,
// which allows prev line to finish typing before starting the next line
if (div1) {
  typeWriterEffect(div1, text1);
  setTimeout(
    () => typeWriterEffect(div2, text2),
    text1.length * typingSpeed + delayBetweenLines,
  );
  setTimeout(
    () => typeWriterEffect(div3, text3),
    (text1.length + text2.length) * typingSpeed + 2 * delayBetweenLines,
  );
  setTimeout(
    () => typeWriterEffect(div4, text4),
    (text1.length + text2.length + text3.length) * typingSpeed +
      3 * delayBetweenLines,
  );
}

// ------ Back to top button ------
const backToTopBtn = document.getElementById("back-to-top");

// Show the button when the user scrolls down 300px, hide it otherwise
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  });

  // Smooth scroll to top when the button is clicked
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
