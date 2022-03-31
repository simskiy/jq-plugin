import { Options } from "@/core/interfaces";
import { ISliderComponent, SliderComponent } from "@core/SliderComponent";
import { ValueDraw } from "./ValueDraw";


export interface IValues extends ISliderComponent {}

export class Values extends SliderComponent implements IValues {
  static className = 'values'

  constructor($root: JQuery, options: Options) {
    super($root, {
      name: 'Values',
      listeners: [],
      ...options
    })
  }
  value = new ValueDraw()

  toHTML() {
    return ``
  }

  init() {
    super.init()
    this.$root.append(this.value.init())
    this.observer.subscribe('thumb:input', (el: HTMLInputElement) => this.value.changeValues(el) )
    this.observer.subscribe('range:set', () => {this.value.init()})
    // this.observer.subscribe('values:set', () => {
    //   this.$root.remove()
    // })
  }
}
