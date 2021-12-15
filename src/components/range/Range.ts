import { SliderComponent } from "@core/SliderComponent";
import { RangeDraw } from "./RangeDraw";

export class Range extends SliderComponent {
  static className = 'range'

  constructor($root: JQuery) {
    super($root, {
      name: 'Range',
      listeners: ['input'],
      min: undefined,
      max: undefined,
      value1: undefined,
      value2: undefined,
      step: undefined
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

  onInput(event: Event) {
    this.slider.drawTrack()
  }

  init () {
    super.init()
    this.prepare()
    this.slider.drawRange()
  }
}
