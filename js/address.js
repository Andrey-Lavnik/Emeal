

const openModal = document.getElementById('open_modal')
const closeModal = document.getElementById('close_modal')
const modal = document.getElementById('modal')

openModal.addEventListener('click', function(e){
    e.preventDefault()
    modal.classList.add('active')
})

closeModal.addEventListener('click', () =>{
    modal.classList.remove('active')
})
const openModal2 = document.getElementById('open_modal2')
const closeModal2 = document.getElementById('close_modal2')
const modal2 = document.getElementById('modal2')

openModal2.addEventListener('click', function(ee){
    ee.preventDefault()
    modal2.classList.add('active2')
})

closeModal2.addEventListener('click', () =>{
    modal2.classList.remove('active2')
})

const burger = document.querySelector('.header_menu') 
const sidebar = document.querySelector('.sidebar')
burger.addEventListener('click',()=>{ 
    if(burger.classList.contains('active')){ 
        burger.classList.remove('active')
        sidebar.classList.remove('active')
    }else{ 
        burger.classList.add('active') 
        sidebar.classList.add('active')
    } 
})
