const Emitter = {
  events: {
  },

  // ouvindo um evento
  on(event, cb) {
    Emitter.events[event]  = Emitter.events[event] || []
    Emitter.events[event].push(cb)
  },

  // emite o som do evento
  emit(event, ...rest) { //pega tudo
    if(event in Emitter.events === false) {
        return;
    }

   

    Emitter.events[event].forEach((e) => {
      e(...rest);
    })
  }

  

}

Emitter.on('click', () => console.log('cliquei'))
Emitter.on('click', () => console.log('cliquei 2'))
Emitter.on('click', () => console.log('cliquei 3'))

Emitter.emit('click')
export{Emitter}