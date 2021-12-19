// import { Slider } from "@/components/slider/Slider";
import { EventListener } from "@core/EventListener";
// import { Options } from "@core/interfaces";

interface Options {
  name: string,
  listeners: string[]
  min?: number
  max?: number
  orientation?: string
  value1?: number
  value2?:number
  step?: number
  observer?: any
}

export class SliderComponent extends EventListener {
  constructor($root: JQuery, options: Options) {
    super($root, options.listeners);
    const {name, min, max, orientation, value1, value2, step, observer} = options
    Object.assign(this, {name, min, max, orientation, value1, value2, step, observer});
    this.prepare()
  }

  prepare() {}
  // return template of component
  toHTML () {
    return ''
  }

  $emit(event: any, ... args: any[]) {
    this.observer.emit(event, ...args)
  }

  init() {
    this.initListeners()
  }

  destroy() {
    this.removeListeners()
  }
}
