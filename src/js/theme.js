// Theme management
export default function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  function updateTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    } else {
      document.documentElement.classList.remove('dark');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  themeToggle.addEventListener('click', () => {
    updateTheme(!document.documentElement.classList.contains('dark'));
  });

  const savedTheme = localStorage.getItem('theme') || 'dark';
  updateTheme(savedTheme === 'dark');
}
