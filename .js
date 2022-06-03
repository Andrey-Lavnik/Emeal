



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

