//contador da aplicação.

import {View} from './View.js'

const Timer = {
  time: 60 * 60,  //estado inicial da aplicação
  currentTime: 0,
  interval: null,

  timeToMinutes: time => Math.floor(time / 60), //arredonda um numero
  timeToSeconds: time => time % 60,

  formatTime: time => String(time).padStart(2, 0), //preenche o começo com 0.

  // inicia o contador
  init(time){
    Timer.time = time || Timer.time
    Timer.currentTime = Timer.time;
    // console.log(Timer.currentTime)
     Timer.interval = setInterval(Timer.countdown, 1000) //executa função a cada 1000 milesegundos

    

  },

 countdown() {
    Timer.currentTime = Timer.currentTime - 1;
  //  console.log(Timer.currentTime)
     const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
     const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))
    //retorna o cronometro
    View.render({
      minutes,
      seconds, 
    })

   if(Timer.currentTime === 0 ){
     clearInterval(Timer.interval);
     return;
   }

  
 }
}


export{Timer}