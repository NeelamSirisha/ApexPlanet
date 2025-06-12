document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const topic = document.getElementById("topic").value;
  const contactTime = document.getElementById("contactTime").value;
  const termsAccepted = document.getElementById("terms").checked;
  const gender = document.querySelector('input[name="gender"]:checked');

  if (!gender || !termsAccepted) {
    alert("Please select gender and accept the terms.");
    return;
  }

  if (name && email && subject && message && topic && contactTime) {
    document.getElementById("successMsg").innerText = `Thanks, ${name}! We'll contact you soon.`;
    document.getElementById("successMsg").style.display = "block";
    this.reset();
  } else {
    alert("Please complete all required fields.");
  }
});
