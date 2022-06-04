
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


const dedLine = '2022-06-08'
  function getTimeRemaining(endTime){
    const t = Date.parse(endTime) - Date.parse(new Date())
    const days = Math.floor(t/(1000*60*60*24));
    const hours = Math.floor((t/(1000*60*60))%24);
    const minutes = Math.floor((t/(1000*60))%60);
    const seconds = Math.floor((t/1000)%60);
    return{
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
  }
  function setClock(selector,endTime){
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    const setinterval = setInterval(updateClock,1000);
    updateClock();
    function updateClock(){
      const t = getTimeRemaining(endTime);
      days.innerHTML = t.days;
      hours.innerHTML = t.hours;
      minutes.innerHTML = t.minutes;
      seconds.innerHTML = t.seconds;
    }
  }
  setClock('.timer',dedLine)

  const arr = []
  const btn  = document.querySelector('button')
  btn.addEventListener('click',()=>{
  const input = document.querySelector('input')
   arr.push(input.value)
   console.log(`событие: ${arr}`)
   localStorage.setItem('test',input.value)
  })




  const close = document.querySelectorAll(".crest1")

  fetch('/data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });

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