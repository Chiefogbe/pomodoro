let countMinutes=document.getElementById('count-minutes')
let countSeconds=document.getElementById('count-seconds')
let btnStart=document.getElementById('btn-start')
let btnSop=document.getElementById('btn-stop')
let btnReset=document.getElementById('btn-reset')



let minutes=25
let seconds=0
let countSec=60

function Timer(){
  countSec--
  countMinutes.textContent=minutes
  countSeconds.textContent=countSec

  if(countSec==0){
    minutes--
    countSeconds.textContent='00'
    countSec=60
  }

  if(countSec<10){
    countSeconds.textContent=`0${countSec}`
  }
}
let interval;

btnStart.addEventListener('click', ()=>{
  minutes--
  interval=setInterval(Timer, 1000)
})

btnSop.addEventListener('click', ()=>{
  clearInterval(interval)
  minutes++
})

btnReset.addEventListener('click', ()=>{
  clearInterval(interval)
  countSeconds.textContent='00'
  countMinutes.textContent='25'

  

})