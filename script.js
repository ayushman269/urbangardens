

// Add event listener to the button
document.getElementById("navigateBtn").addEventListener("click", function() {
    // Redirect to another HTML page
    window.location.href = 'signup.html';
});
// script.js
const sentences = document.querySelector('.marquee');

sentences.addEventListener('mouseover', () => {
    sentences.style.animationPlayState = 'paused';
});

sentences.addEventListener('mouseout', () => {
    sentences.style.animationPlayState = 'running';
});
