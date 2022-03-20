import { SliderComponent } from "@core/SliderComponent";
import { RangeDraw } from "./RangeDraw";
import { ISliderComponent } from "@core/SliderComponent";
import { Observer } from "@/core/Observer";
import { Slider } from "../slider/Slider";
import { IRangeDraw } from "./RangeDraw";

export interface IRange extends ISliderComponent {
  slider: IRangeDraw
}
export class Range extends SliderComponent implements IRange {
  constructor($root: JQuery) {
    super($root, {
      name: 'Range',
      listeners: ['input'],
    })
    this.track = document.createElement('div')
    this.slide1 = document.createElement('input')
    this.slide2 = document.createElement('input')
  }
  static className = 'range'
  slider = new RangeDraw(this)


  toHTML() {
    return ''
  }

  prepare() {
  }

  init () {
    super.init()
    this.track.className = 'range__track'
    this.slide1.type = 'range'
    this.slide1.setAttribute('data-input', '1')
    this.slide2.type = 'range'
    this.slide2.setAttribute('data-input', '2')
    this.$root.append(this.track, this.slide1, this.slide2)

    this.slider.init()
    // this.observer.emit('thumb:init', this.$root)
  }

  onInput(event: {target: HTMLInputElement}) {
    this.slider.drawRange(event.target)
  //   this.observer.emit('thumb:input', value)
  }

}
