function loginFormNotify(notifyEl, string) {
  notifyEl.textContent = string;
  notifyEl.classList.add('show');

  setTimeout(() => {
    notifyEl.textContent = '';
    notifyEl.classList.remove('show');
  }, 5000);
}

function showElements(elements) {
  elements.forEach(link => {
    link.style.display = 'flex';
  });
}

function hideElements(elements) {
  elements.forEach(link => {
    link.style.display = 'none';
  });
}

function classToggle(element, action, className) {
  element.classList[action](className);
}

export { loginFormNotify, showElements, hideElements, classToggle };
