import { SliderComponent } from "@core/SliderComponent";
import { RangeDraw } from "./RangeDraw";
import { Options } from '@core/interfaces'

export class Range extends SliderComponent {
  static className = 'range'

  constructor($root: JQuery, options: Options) {
    super($root, {
      name: 'Range',
      listeners: ['input'],
      ...options
    });
  }

  toHTML() {
    return `
            <div class="range__track"></div>
            <input type="range" id="slider-1">
            <input type="range" id="slider-2">
            `
  }

  prepare() {
    this.slider = new RangeDraw(this.$root, {
      min: this.min,
      max: this.max,
      value1: this.value1,
      value2: this.value2,
      step: this.step,
      orientation: this.orientation
    })
  }

  onInput(event: {target: HTMLInputElement}) {
    if (event.target.id === 'slider-1') {
      this.slider.drawThumb_1()
    } else {
      this.slider.drawThumb_2()
    }
  }

  init () {
    super.init()
    this.prepare()
    this.slider.drawRange()
  }
}
