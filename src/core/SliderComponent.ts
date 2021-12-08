// import { Slider } from "@/components/slider/Slider";
import { Observer } from "./Observer";

interface Options {
  name: string,
  listeners: string[]
  min?: number
  max?: number
  orientation?: string
  value1?: number
  value2?:number
  step?: number
}

const MIN_VALUE = 0
const MAX_VALUE = 100
const ORIENTATION = 'vertical'
const VALUE_1 = 10
const VALUE_2 = 70
const STEP = 5

export class SliderComponent extends Observer {

  // public components: any[] = []

  constructor($root: JQuery, options: Options) {
    super($root, options.listeners);
    this.name = options.name
    this.min = options.min || MIN_VALUE
    this.max = options.max || MAX_VALUE
    this.orientation = options.orientation || ORIENTATION
    this.value1 = options.value1 || VALUE_1
    this.value2 = options.value2 || VALUE_2
    this.step = options.step || STEP
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
