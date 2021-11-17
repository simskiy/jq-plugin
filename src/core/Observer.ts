import { capitalize } from "./utils";

export class Observer {
  // $root: JQuery;
  listeners: string[];
  [method: string]: any;

  constructor($root: JQuery, listeners: string[]) {
    if(!$root) {
      throw new Error('no $root provided for Observer')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initListeners() {
    if (this.listeners) {
      this.listeners.forEach(listener => {
        const method: string = getMethodName(listener)
        if (!this[method])
          throw new Error(`Метод ${method} не реализован в компоненте ${this.name}`)
        this[method] = this[method].bind(this)
        this.$root.on(listener, this[method])
      })
    }
  }

  removeListeners() {
    if (this.listeners) {
      this.listeners.forEach(listener => {
        const method: string = getMethodName(listener)
        this.$root.off(listener, this[method])
      })
    }
  }
}

function getMethodName (event: string) {
  return `on${capitalize(event)}`
}
