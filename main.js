// Scroll to top button
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

function searchGoogle() {
    const query = document.querySelector('.search-bar input').value;
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
    } 
} 

// Theme Toggle
const toggle = document.getElementById("themeToggle");
 toggle.addEventListener("click", function() {
    toggle.classList.toggle("dark-mode");
    var body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } 
    else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
});
