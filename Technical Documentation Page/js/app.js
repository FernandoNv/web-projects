const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
menuIcon.addEventListener('click', () =>{
    if(menu.classList.contains('display-block'))
        menu.classList.remove('display-block');
    else
        menu.classList.add('display-block');
});

menu.addEventListener('click', () =>{
    if(menu.classList.contains('display-block'))
        menu.classList.remove('display-block');
    else
        menu.classList.add('display-block');
});