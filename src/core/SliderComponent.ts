import { Observer } from "./Observer";

interface Options {
  name: string,
  listeners: string[]
}

export class SliderComponent extends Observer {
  constructor($root: any, options: Options) {
    super($root, options.listeners);
  }

  // return template of component
  toHTML () {
    return ''
  }

  init() {
    this.initListeners()
  }
}
