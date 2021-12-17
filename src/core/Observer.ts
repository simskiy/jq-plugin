interface Listener {
  [x: string]: Function[]
}

export class Observer {
  listeners: Listener
  constructor () {
    this.listeners = {}
  }
// Уведомляем слушателей
  emit(event: string, ...args: {[x: string]: string}[]) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // Подписываемся на уведомления или добавляем новго слушателя
  subscribe(event: any, fn: () => void) {
    this.listeners[event] = this.listeners[event] ||[]
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter( listener => listener !== fn)
    }
  }
}
