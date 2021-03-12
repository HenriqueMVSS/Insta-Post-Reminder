const Notifyer = {
  async init() {
    // verificando se tem permissão de notificar
    const permission = await Notification.requestPermission( )
    if (permission !== "granted") {
      throw new Error('Permissão Negada');
    }

    
  },
  notify({title, body, icon}) {
    return () => new Notification(title, {
      body,
      icon
    })
  }
}

export{Notifyer};