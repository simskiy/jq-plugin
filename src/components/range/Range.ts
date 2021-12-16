import { SliderComponent } from "@core/SliderComponent";
import { RangeDraw } from "./RangeDraw";

const MIN_VALUE = 0
const MAX_VALUE = 100
const ORIENTATION = 'vertical'
const VALUE_1 = 10
const VALUE_2 = 70
const STEP = 5


export class Range extends SliderComponent {
  static className = 'range'

  constructor($root: JQuery) {
    super($root, {
      name: 'Range',
      listeners: ['input'],
      min: MIN_VALUE,
      max: MAX_VALUE,
      value1: VALUE_1,
      value2: VALUE_2,
      step: STEP
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
      step: this.step
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
