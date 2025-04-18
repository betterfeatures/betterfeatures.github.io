(function () {
  const NOTICE_ID = 'better-features-notice';

  function addNotice() {
    // 1) Find the logout form in the account menu
    const logoutForm = document.querySelector('form.logout-form');
    if (!logoutForm) {
      // Menu not open yet → retry
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
    notice.style.marginTop = '4px';

    // 4) Wrap in a <div role="none"> to match GitHub’s menu structure
    const wrapper = document.createElement('div');
    wrapper.setAttribute('role', 'none');
    wrapper.appendChild(notice);

    // 5) Insert it immediately after the logout form container
    const menuItemContainer = logoutForm.closest('div[role="none"]');
    if (menuItemContainer && menuItemContainer.parentNode) {
      menuItemContainer.parentNode.insertBefore(wrapper, menuItemContainer.nextSibling);
    }
  }

  // Kick it off
  addNotice();
})();
