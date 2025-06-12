function toggleBenefit(clickedElement) {
  const allBenefits = document.querySelectorAll(".benefit");

  allBenefits.forEach(benefit => {
    const content = benefit.querySelector(".content");
    if (benefit !== clickedElement) {
      content.classList.add("hidden");
    }
  });

  const currentContent = clickedElement.querySelector(".content");
  currentContent.classList.toggle("hidden");
}
