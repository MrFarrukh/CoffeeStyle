let burgerBtn = document.getElementById('burger-btn')
let burgerMenu = document.getElementById('burger-menu')



burgerBtn.addEventListener('click', function(){
    burgerMenu.classList.toggle('active')
})