import {Notifyer} from './Notifyer.js'
import {Timer} from './Time.js'

const App = {
  async start() {
    try {
      Timer.init();
      // await Notifyer.init();
      // Notifyer.notify({
      //   title: "Hora do Post",
      //   body: "Crie um conteúdo para ajudar a comunidade"
      // })
    } catch (err) {
      console.log(err.message)
    }
    
  }
}

export{App};