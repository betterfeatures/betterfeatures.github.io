(function () {
  function addNotice() {
    const settingsMenu = document.querySelector('[aria-label="Account settings"] ul');
    if (!settingsMenu) {
      setTimeout(addNotice, 500);
      return;
    }

    const existingNotice = document.getElementById('better-features-notice');
    if (existingNotice) return;

    const li = document.createElement('li');
    li.id = 'better-features-notice';
    li.textContent = '✅ GitHub Better Features is active';
    li.style.color = '#2ea44f';
    li.style.fontWeight = 'bold';
    li.style.padding = '4px 8px';

    settingsMenu.appendChild(li);
  }

  // Run the feature logic
  addNotice();

  // Add more GitHub-enhancing features here
})();
