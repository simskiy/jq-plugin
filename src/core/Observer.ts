export class Observer {
  listeners: {
    [x: string]: Function[];
  }

  constructor () {
    this.listeners = {}
  }
// Уведомляем слушателей
  emit(event: string, ...args: string[]) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // Подписываемся на уведомления или добавляем новго слушателя
  subscribe(event: string, fn: Function) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event].filter( (listener: any) => listener !== fn)
    }
  }
}
