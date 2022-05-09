var button = document.getElementsByClassName('button-burger')[0];
button.onclick = () => {
    var menu = document.getElementsByClassName('menu-burger')[0];
    menu.classList.toggle('show');
};
