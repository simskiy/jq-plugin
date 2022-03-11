import { SliderComponent } from "@core/SliderComponent";
import { RangeDraw } from "./RangeDraw";
import { Options } from '@core/interfaces'

export class Range extends SliderComponent {
  static className = 'range'

  constructor($root: JQuery) {
    super($root, {
      name: 'Range',
      listeners: ['input'],
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
    // this.slider = new RangeDraw(this.$root, {})
  }

  init () {
    super.init()
    this.prepare()
    // this.slider.drawRange()
    // this.observer.emit('thumb:init', this.$root)
  }

  onInput(event: {target: HTMLInputElement}) {
    if (event.target.dataset.input === '1') {
      this.slider.drawThumb_1()
    } else {
      this.slider.drawThumb_2()
    }

    const value = event.target
    this.observer.emit('thumb:input', value)
  }
}
