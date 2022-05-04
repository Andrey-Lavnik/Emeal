const burger = document.querySelector('.header_menu')  
burger.addEventListener('click',()=>{  
    if(burger.classList.contains('active')){  
        burger.classList.remove('active')  
    }else{  
        burger.classList.add('active')  
    }  
})




