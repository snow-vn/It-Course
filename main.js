// ------------------ open and close search ---------------------------
var formSearch = document.querySelector('.form-search');
var mainMenu = document.querySelector('.main-nav__center');
var rightMenu = document.querySelector('.right-menu');
var searchIcon = document.querySelector('#search-icon');
var cancelSearch = document.querySelector('#cancel-search');

searchIcon.addEventListener('click', () =>{
    openSearch();
})

cancelSearch.addEventListener('click', () => {
    closeSearch();
});


openSearch = () => {
    rightMenu.style.display = 'none';
    mainMenu.style.display = 'none';
    formSearch.style.display = 'flex';
}
closeSearch = () => {
    rightMenu.style.display = 'block';
    mainMenu.style.display = 'flex';
    formSearch.style.display = 'none';
}

// ---------------------- hide and show list course sidebar -----------------------------
var headingCourseSb = document.querySelectorAll('.course-sidebar__heading');
Array.from(headingCourseSb).forEach((hdCourseSb) => {
    hdCourseSb.addEventListener('click', () => {
        var cousrseSb = hdCourseSb.parentElement;
        cousrseSb.classList.toggle('active')
    })
})

// ---------------------- select item course sidebar --------------------------------------------
var elCourseSb = document.querySelectorAll('.course-sidebar')
Array.from(elCourseSb).forEach((el) => {

    var itemCourseSb = el.querySelectorAll('.list-group-item')
    Array.from(itemCourseSb).forEach((item) => {

        item.addEventListener('click', () => {
            console.log(item)
            // remove class active
            Array.from(itemCourseSb).forEach((item) => {
                item.classList.remove('active')
            })
    
            // add the active layer to the clicked item
            item.classList.add('active')
        })
    })
})

// show and hide form
var overlays = document.querySelectorAll('.overlay')
var authorBox = document.querySelector('.author-box')
var user = document.getElementById('user')
var iconClose = document.querySelectorAll('.icon-close')

var formLogin = authorBox.querySelector('.form-login')
var formRegister = authorBox.querySelector('.form-register')

var signUp = document.getElementById('signUp')
var signIn = document.getElementById('signIn');

signUp.addEventListener('click', () => {
    formLogin.classList.add('d-none');
    formRegister.classList.add('d-block')
})

signIn.addEventListener('click', () => {
    formLogin.classList.remove('d-none');
    formRegister.classList.remove('d-block')
})

user.addEventListener('click', () => {
    authorBox.classList.toggle('d-none')
})

Array.from(overlays).forEach((overlay) => {
    overlay.addEventListener('click', () => {
        closeSearch()
        authorBox.classList.add('d-none')
    })
})
Array.from(iconClose).forEach((close) => {
    close.addEventListener('click', () => authorBox.classList.add('d-none'))
})