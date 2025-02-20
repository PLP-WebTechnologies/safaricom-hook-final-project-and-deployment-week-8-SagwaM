// Toggle between Dark and Light Themes
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.getAttribute('data-theme');
  body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
}

// Scroll to Top Functionality
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const backToTopButton = document.getElementById('back-to-top');
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Category Filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const blogCards = document.querySelectorAll('.blog-card');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Set active class on the selected button
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filter blog cards by category
    const category = button.getAttribute('data-category');
    blogCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
