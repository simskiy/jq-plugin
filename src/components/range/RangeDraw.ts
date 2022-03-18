import { Range } from "./Range"
import { setOptions } from "@/core/utils"
import { SliderComponent } from "@/core/SliderComponent"

export class RangeDraw {
  $root: Range
  static prop = ['min', 'max', 'step']
  constructor($root: Range) {
    this.$root = $root
  }

  init(options?: {}) {
    setOptions(options)
    RangeDraw.prop.map( (item) => {
      this.$root.slide1[item] = this.$root[item]
      this.$root.slide2[item] = this.$root[item]
    })
    this.$root.slide1.value = this.$root.value1
    this.$root.slide2.value = this.$root.value2
    this.drawTrack(undefined)
  }

  drawRange(target: HTMLElement | undefined) {
    // this.$root.slide1 - html element
    // this.$root - object

    SliderComponent.prototype.value1 = +this.$root.slide1.value
    SliderComponent.prototype.value2 = +this.$root.slide2.value
    this.drawTrack(target?.dataset.input)
  }

  private drawTrack(data: string | undefined) {

    let percent1: number = this.$root.slide1.value / this.$root.max * 100
    let percent2: number = this.$root.slide2.value / this.$root.max * 100

    if (this.$root.value2 - this.$root.value1 < this.$root.step && data) {
      this.stopThumb(data)
    } else {
      this.$root.track.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`
    }
  }

  private stopThumb(data: string) {
    switch (data) {
      case '1': this.$root.slide1.value = this.$root.value2 - this.$root.step; break;
      case '2': this.$root.slide2.value = this.$root.value1 + this.$root.step; break;
      default: throw new Error('Invalid data-input')
    }
  }

}
