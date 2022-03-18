import { SliderComponent } from "@core/SliderComponent";
import { RangeDraw } from "./RangeDraw";
import { Observer } from "@/core/Observer";
import { Slider } from "../slider/Slider";
// import { Options } from '@core/interfaces'


export class Range extends SliderComponent {
  static className = 'range'

  constructor($root: JQuery) {
    super($root, {
      name: 'Range',
      listeners: ['input'],
    })
    // this.$root = $root
    this.track = document.createElement('div')
    this.slide1 = document.createElement('input')
    this.slide2 = document.createElement('input')
  }

  toHTML() {
    return ''
  }

  prepare() {
    this.slider = new RangeDraw(this)
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

  private getOpt() {

  }

}
