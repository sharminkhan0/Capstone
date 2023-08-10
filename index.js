//hide show menubar

const element = document.getElementById('navbar-item-group');
function menu_icon() {
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}
element.addEventListener('click', menu_icon);