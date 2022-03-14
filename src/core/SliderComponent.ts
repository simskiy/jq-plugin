// import { Slider } from "@/components/slider/Slider";
import { EventListener } from "@core/EventListener";
import { Observer } from '@core/Observer'
// import { Options } from "@core/interfaces";

interface Options {
  name?: string,
  listeners: string[]
  observer?: Observer
}

export abstract class SliderComponent extends EventListener {
  constructor($root: JQuery, options: Options) {
    super($root, options.listeners)
    // this.observer = options.observer
    this.options = options
    this.prepare()
  }

  prepare() {}

  // return template of component
  toHTML () {
    return ''
  }

  set () {
  }

  init() {
    this.initListeners()
  }

  destroy() {
    this.removeListeners()
  }
}
