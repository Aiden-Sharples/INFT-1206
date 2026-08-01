const toggleBtn = document.getElementById('toggle-comments');
const comments = document.getElementById('comments');

function toggleComments() {
  const isHidden = comments.hasAttribute('hidden');
  if (isHidden) {
    comments.removeAttribute('hidden');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.textContent = 'Hide comments';
  } else {
    comments.setAttribute('hidden', '');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.textContent = 'Show comments';
  }
}

toggleBtn.addEventListener('click', toggleComments);

toggleBtn.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleComments();
  }
});
