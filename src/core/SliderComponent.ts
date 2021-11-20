import { Observer } from "./Observer";

interface Options {
  name: string,
  listeners: string[]
}

export class SliderComponent extends Observer {
  constructor($root: JQuery, options: Options) {
    super($root, options.listeners);
    this.name = options.name
  }

  // return template of component
  toHTML () {
    return ''
  }

  init() {
    this.initListeners()
    this.initComponent()
  }

  destroy() {
    this.removeListeners()
  }
}
