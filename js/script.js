let navbar1 = document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar1.classList.add('active');
}
document.querySelector('#nav-close').onclick = () => {
    navbar1.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}

document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}
window.onscroll = () => {
    navbar1.classList.remove('active');
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};
window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
};

