function showDetails(title, description) {
  document.getElementById('asanaTitle').textContent = title;
  document.getElementById('asanaDescription').textContent = description;
  document.getElementById('modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function filterAsanas(category) {
  const allAsanas = document.querySelectorAll('.asana-card');
  allAsanas.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
