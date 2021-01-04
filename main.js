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