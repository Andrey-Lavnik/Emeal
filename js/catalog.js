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

// const modal = document.querySelector('.modal')
// const btnModal = document.querySelector('.processed')
// btnModal.addEventListener('click',()=>{
//     modal.classList.remove('none')
// }) 

// const btnClose = document.querySelector('.btn-close')
// btnClose.addEventListener('click',()=>{
//     modal.classList.add('none')
// }) 

const cancelBtn = document.querySelectorAll('.cancel-item')
const items = document.querySelector('.items')
const itemProduct = document.querySelectorAll('.item')
cancelBtn.forEach((item)=>{
    item.addEventListener('click',()=>{ 
        item.parentNode.remove() 
    })
})

const empty = document.querySelector('.empty')
if(itemProduct == null){
  empty.classList.remove('none')
}

fetch('./js/data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

const but1 = document.querySelector('.but1').value;
function cart(){
  
}
// const but2 = document.querySelector('.but2')
// const nameObj = document.querySelector('.name-object')
// let arr = []
// arr.push(but1.value , but2.value)
// localStorage.setItem('Cini minis',arr)