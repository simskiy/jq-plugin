import { Range } from "./Range"
import { setOptions } from "@/core/utils"
import { SliderComponent } from "@/core/SliderComponent"

export class RangeDraw {
  $root: Range
  constructor($root: Range) {
    this.$root = $root
  }

  init(options?: {}) {
    setOptions(options)
    this.$root.slide1.value = this.$root.value1
    this.$root.slide1.min = this.$root.min
    this.$root.slide1.max = this.$root.max
    this.$root.slide1.step = this.$root.step
    this.$root.slide2.value = this.$root.value2
    this.$root.slide2.min = this.$root.min
    this.$root.slide2.max = this.$root.max
    this.$root.slide2.step = this.$root.step
    this.drawTrack(undefined)
  }

  drawRange(target: HTMLElement | undefined) {
    // this.$root.slide1 - html element
    // this.$root - object

    this.$root.value1 = +this.$root.slide1.value
    this.$root.value2 = +this.$root.slide2.value
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
