// Example: Animate on Scroll (optional)
window.addEventListener("scroll", function () {
  const boxes = document.querySelectorAll(".reason-box");
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (boxTop < windowHeight - 100) {
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    }
  });
});