const games = document.querySelectorAll(".game");
const modal = document.getElementById("gameModal");
const iframe = document.getElementById("gameFrame");
const closeBtn = document.querySelector(".close");

games.forEach(game => {
  game.addEventListener("click", () => {
    const url = game.getAttribute("data-url");
    iframe.src = url;
    modal.style.display = "block";
  });
});

closeBtn.onclick = () => {
  modal.style.display = "none";
  iframe.src = "";
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
};



<section class="hero-section">
  <div class="container hero-content">
    <div class="image">
      <img src="yoga.jpg" alt="Yoga Pose" />
    </div>
    <div class="text">
      <h1>Yoga: Your Path to Mind, Body & Soul Harmony</h1>
      <p>Learn yoga from the comfort of your home. Transform your body and mind through daily practice and guidance.</p>
      <a href="#" class="btn">Join Now</a>
    </div>
  </div>
</section>
