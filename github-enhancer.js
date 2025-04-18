(function () {
  // Wait until the DOM is ready
  function addNotice() {
    const menu = document.querySelector('[aria-label="Account settings"] ul');
    if (!menu) {
      setTimeout(addNotice, 500);
      return;
    }

    const li = document.createElement('li');
    li.textContent = '✅ GitHub Better Features is active';
    li.style.color = '#2ea44f';
    li.style.fontWeight = 'bold';
    li.style.padding = '4px 8px';
    menu.appendChild(li);
  }

  addNotice();
})();
