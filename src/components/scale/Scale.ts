import { ISliderComponent, SliderComponent } from "@core/SliderComponent";
import { Options } from '@core/interfaces'
import { ScaleDraw } from "./ScaleDraw";


export interface IScale extends ISliderComponent {}

export class Scale extends SliderComponent implements IScale {
  static className = 'scale'

  constructor($root: JQuery, options: Options) {
    super($root, {
      name: 'Scale',
      listeners: [],
      ...options
    })
  }
  scale = new ScaleDraw()

  toHTML() {
    return ''
  }

  init() {
    super.init()
    const scale = this.scale.init()
    this.$root.append(scale)
    this.observer.subscribe('slider:set', () => this.$root.append(this.scale.init()))
  }
}
