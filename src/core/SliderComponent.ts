// import { Slider } from "@/components/slider/Slider";
import { EventListener } from "@core/EventListener";
import { Observer } from '@core/Observer'
// import { Options } from "@core/interfaces";

interface Options {
  name?: string,
  listeners: string[]
  min: number
  max: number
  orientation?: string
  value1: number
  value2:number
  step: number
  observer?: Observer
}

export abstract class SliderComponent extends EventListener {
  constructor($root: JQuery, options: Options) {
    super($root, options.listeners)
    const {name, min, max, orientation, value1, value2, step} = options
    Object.assign(this, {name, min, max, orientation, value1, value2, step})
    this.observer = options.observer
    this.prepare()
  }

  prepare() {}

  // return template of component
  toHTML () {
    return ''
  }

  set (options?: {[x: string]: string | number}) {
    this.min = options?.min
    console.log(this)
  }

  init() {
    this.initListeners()
  }

  destroy() {
    this.removeListeners()
  }
}
