import { ISliderComponent, SliderComponent } from "@core/SliderComponent";
import { Options } from '@core/interfaces'
import { ScaleDraw } from "./ScaleDraw";


export interface IScale extends ISliderComponent {}

export class Scale extends SliderComponent implements IScale {
  static className = 'scale'

  constructor($root: JQuery, options: Options) {
    super($root, {
      name: 'Scale',
      listeners: ['click'],
      ...options
    })
  }
  scale = new ScaleDraw(this.params)

  toHTML() {
    return ''
  }

  init() {
    super.init()
    const scale = this.scale.init()
    this.$root.append(scale)
    this.observer.subscribe('scale:set', () => this.$root.append(this.scale.init()))
  }

  onClick(event: {target: HTMLLIElement}) {
    let middleNumb = (this.params.value1 + this.params.value2) / 2
    let num = Number(event.target.textContent)
  
    if (event.target.tagName == 'LI') {
      if (num < middleNumb) {
        this.params.value1 = num
      } else {
        this.params.value2 = num
      }
    }
    this.observer.emit('range:set')
    this.observer.emit('value:set')
  }
}
