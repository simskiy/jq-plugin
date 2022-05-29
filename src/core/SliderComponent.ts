// import { Slider } from "@/components/slider/Slider";
import { EventListener } from "@core/EventListener";
import { IEventListener } from "@core/EventListener";
import { Observer } from '@core/Observer'
import { SliderParams } from "./SliderParams";
// import { Options } from "@core/interfaces";

interface Options {
  name?: string,
  listeners: string[]
  observer?: Observer
  params?: SliderParams
}

export interface ISliderComponent extends IEventListener {
  slider?: any
  toHTML(): string
  init(): void
  // observer: Observer
}

export class SliderComponent extends EventListener implements ISliderComponent {
  constructor($root: JQuery, options: Options) {
    super($root, options.listeners)
    this.observer = options.observer
    this.params = options.params
    this.options = options
  }

  // return template of component
  toHTML () {
    return ''
  }

  set () {
    console.log(this.params.range)
  }

  init() {
    this.initListeners()
  }

  destroy() {
    this.removeListeners()
  }
}
