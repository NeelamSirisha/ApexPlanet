const languageHistory = {
  python: {
    title: "Python",
    content: "Python was created by Guido van Rossum and released in 1991. It emphasizes readability and simplicity. Python is widely used in web development, data science, automation, AI, and more.",
    image: "py.png"
  },
  javascript: {
    title: "JavaScript",
    content: "JavaScript was created by Brendan Eich in 1995. Initially developed in just 10 days, it has grown to become the cornerstone of interactive web development.",
    image: "js.png"
  },
  java: {
    title: "Java",
    content: "Java was developed by James Gosling at Sun Microsystems and released in 1995. It follows the 'write once, run anywhere' philosophy and is commonly used in enterprise applications and Android development.",
    image: "java.png"
  },
  cpp: {
    title: "C++",
    content: "C++ was developed by Bjarne Stroustrup as an extension of C in 1985. It added object-oriented features to C and is used in system software, games, and real-time applications.",
    image: "c++.png"
  },
  html: {
    title: "HTML",
    content: "HTML (HyperText Markup Language) was created in the early 1990s by Tim Berners-Lee. It forms the backbone of the web, structuring content for browsers to display.",
    image: "html.png"
  }
};

function showHistory(langKey) {
  const modal = document.getElementById('modal');
  const data = languageHistory[langKey];
  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-body').innerText = data.content;
  document.getElementById('modal-img').src = data.image;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}
