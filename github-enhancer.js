(function () {
  const NOTICE_ID = 'better-features-notice';

  function addNotice() {
    // 1) Find the search bar container
    const searchContainer = document.querySelector('header div[role="search"]');
    if (!searchContainer) {
      // If search bar isn't available yet, retry
      return setTimeout(addNotice, 500);
    }

    // 2) Prevent adding the notice twice
    if (document.getElementById(NOTICE_ID)) return;

    // 3) Build your notice
    const notice = document.createElement('div');
    notice.id = NOTICE_ID;
    notice.textContent = '✅ GitHub Better Features is active';
    notice.style.color = '#2ea44f';
    notice.style.fontWeight = 'bold';
    notice.style.padding = '4px 8px';
    notice.style.marginRight = '10px';  // Space between the notice and search bar

    // 4) Insert it to the left of the search bar
    searchContainer.insertBefore(notice, searchContainer.firstChild);
  }

  // Kick it off
  addNotice();
})();
