 document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const firstName = document.getElementById("firstName").value.trim();
      const lastName = document.getElementById("lastName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const message = document.getElementById("message").value.trim();
      const formMessage = document.getElementById("formMessage");

      const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
      const phoneRegex = /^\\+?[0-9\\s\\-]{7,15}$/;

      if (!firstName || !lastName || !email || !message) {
        formMessage.textContent = "Please fill in all required fields.";
        formMessage.style.color = "red";
        return;
      }

      if (!emailRegex.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
      }

      if (phone && !phoneRegex.test(phone)) {
        formMessage.textContent = "Please enter a valid phone number.";
        formMessage.style.color = "red";
        return;
      }

      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "green";

      document.getElementById("contactForm").reset();
    });