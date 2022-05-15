import { SliderComponent } from "@core/SliderComponent";
import { RangeDraw } from "./RangeDraw";
import { ISliderComponent } from "@core/SliderComponent";
import { IRangeDraw } from "./RangeDraw";
import { Options } from "@/core/interfaces";

export interface IRange extends ISliderComponent {
  slider: IRangeDraw
}
export class Range extends SliderComponent {
  constructor($root: JQuery, options: Options) {
    super($root, {
      name: 'Range',
      listeners: ['input'],
      ...options
    })
  }
  static className = 'range'
  slider = new RangeDraw(this.$root, this.params)

  toHTML() {
    return ''
  }

  prepare() {
  }

  init () {
    super.init()
    this.$root.append(this.slider.init())
    this.observer.subscribe('range:input', (data: string) => this.slider.drawTracks(data))
    this.observer.subscribe('slider:set', () => this.slider.setRangeProperty())
  }

  onInput(event: {target: HTMLInputElement}) {
    this.observer.emit('thumb:input', event.target)
    switch (event.target.dataset.input) {
      case '1': { this.params.value1 = +event.target.value
        this.observer.emit('range:input', event.target.dataset.input)}; break
      case '2': { this.params.value2 = +event.target.value
        this.observer.emit('range:input', event.target.dataset.input)};break
    }
  }
}
