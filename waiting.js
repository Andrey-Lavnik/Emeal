const openModal = document.getElementById('open_modal')
console.log(openModal)
const closeModal = document.getElementById('close_modal')
const modal = document.querySelector('.modal')
openModal.addEventListener('click', function(e){
    e.preventDefault()
    modal.classList.add('active')
})
closeModal.addEventListener('click', () =>{
    modal.classList.remove('active')
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

