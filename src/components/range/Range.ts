import { SliderComponent } from "@core/SliderComponent";
import { RangeDraw } from "./RangeDraw";
import { Options } from '@core/interfaces'

export class Range extends SliderComponent {
  static className = 'range'

  constructor($root: JQuery, options: Options) {
    super($root, {
      name: 'Range',
      listeners: ['input'],
      ...options,
    })
  }

  toHTML() {
    return `
            <div class="range__track"></div>
            <input type="range">
            <input type="range">
            `
  }

  prepare() {
    this.slider = new RangeDraw(this.$root, {
      min: this.min,
      max: this.max,
      value1: this.value1,
      value2: this.value2,
      step: this.step,
      orientation: this.orientation,
      // observer: this.observer
    })
  }

  onInput(event: {target: HTMLInputElement}) {
    if (event.target.dataset.input === '1') {
      this.slider.drawThumb_1()
    } else {
      this.slider.drawThumb_2()
    }

    const value = event.target
    this.observer.emit('thumb:input', this.$root, value)
  }

  init () {
    super.init()
    this.prepare()
    this.slider.drawRange()

    this.observer.emit('thumb:init', this.$root)
  }
}
