import { capitalize } from "./utils";

export interface IEventListener {
  $root: JQuery
  listeners: string[]
}
export abstract class EventListener implements IEventListener{
  public $root: JQuery<HTMLElement>;
  public listeners: string[];
  [method: string]: any; /* Тоже какая-то хуйня. Исправить! */

  protected constructor($root: JQuery, listeners: string[]) {
    if(!$root) {
      throw new Error('no $root provided for EventListener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  protected initListeners() {
    // if (this.listeners) {
      this.listeners.forEach((listener: string) => {
        const method: string = getMethodName(listener)
        if (!this[method])
          throw new Error(`Метод ${method} не реализован в компоненте ${this.name}`)
        this[method] = this[method].bind(this)
        this.$root.on(listener, this[method])
      })
    // }
  }

  protected removeListeners() {
    // if (this.listeners) {
      this.listeners.forEach((listener: string) => {
        const method: string = getMethodName(listener)
        this.$root.off(listener, this[method])
      })
    // }
  }
}

function getMethodName (event: string) {
  return `on${capitalize(event)}`
}
