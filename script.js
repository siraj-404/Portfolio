document.getElementById('download-resume').addEventListener('click', function () {
  window.open('./resume.pdf', '_blank'); // Opens the resume in a new tab
});

function addRecommendation() {
  const input = document.getElementById('recommend_input');
  const text = input.value.trim();
  if (!text) return;

  // Find the recommendations grid
  const grid = document.querySelector('.recommendations-grid');
  if (!grid) return;

  // Create new blockquote element
  const blockquote = document.createElement('blockquote');
  blockquote.innerHTML = `<span class="quote-mark">“</span>${text}<span class="quote-mark">”</span>`;

  // Add the new recommendation to the grid
  grid.appendChild(blockquote);

  // Clear the input
  input.value = '';

  // Show confirmation popup
  showPopup(); // <-- Add this line here
}