let settingMenu = document.querySelector('.setting-menu');
let darkBtn = document.getElementById('dark-btn');
let searchMenu = document.querySelector('.search-menu');
let moreMenu = document.querySelector('.more-menu');
let followingMenu = document.querySelector('.following-menu');
let mobileMenu = document.querySelector('.mobile-menu');


let mobileMenuToggle = () => {
    mobileMenu.classList.toggle('mobile-menu-height');
}

let followingMenuToggle = () => {
    followingMenu.classList.toggle('following-follow-height');
}


let moreMenuToggle = () => {
    moreMenu.classList.toggle('more-menu-height');
}

let searchMenuToggle = () => {
    searchMenu.classList.add('search-menu-height');
}

let searchMenuOf = () => {
    searchMenu.classList.remove('search-menu-height');
}


let settingMenuToggle = () => {
    settingMenu.classList.toggle('setting-menu-height');
}

darkBtn.onclick = () => {
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');

    if(localStorage.getItem('theme') == 'light') {
        localStorage.settItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
    }
}

if(localStorage.getItem('theme') == 'light') {
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}
else if (localStorage.getItem('them') == 'dark') {
    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
}
else {
    localStorage.setItem('theme', 'light');
}




// Mobile Dark Btn 

let mobileDarkBtn = document.getElementById('mobile-dark-btn');


mobileDarkBtn.onclick = () => {
    mobileDarkBtn.classList.toggle('mobile-dark-btn-on');
    document.body.classList.toggle('dark-theme');

    if(localStorage.getItem('theme') == 'light') {
        localStorage.settItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
    }
}

if(localStorage.getItem('theme') == 'light') {
    mobileDarkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}
else if (localStorage.getItem('them') == 'dark') {
    mobileDarkBtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
}
else {
    localStorage.setItem('theme', 'light');
}



// let container = document.querySelector('.container');
// let userProfile = document.querySelector('.user-profile');


// userProfile.onclick = () => {
//     container.classList.toggle('show-story');   
    
// }
