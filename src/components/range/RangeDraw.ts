import { Range } from "./Range"
import { setOptions } from "@/core/utils"
import { SliderComponent } from "@/core/SliderComponent"

export class RangeDraw {
  $root: Range

  constructor($root: Range) {
    this.$root = $root
  }

  drawRange(options?: {}) {
    setOptions(options)
    this.$root.slide1.value = this.$root.value1
    this.$root.slide2.value = this.$root.value2
    this.$root.slide1.step = this.$root.step
    this.$root.slide2.step = this.$root.step
    

    // if (this.$root.slide2.value - this.$root.slide1.value <= this.$root.step) {
    //   this.$root.slider1.value = this.$root.slide2.value - this.$root.step
    //   console.log(`value1: ${this.$root.slider1.value}, value2: ${this.$root.slider2.value}, step: ${this.$root.step}`)
    // }

    // if (this.$root.slide2.value - this.$root.slide1.value <= this.$root.step) {
    //   // Реализовал через parseInt, так как не смог разобраться с багом
    //   this.$root.slide2.value = parseInt(this.$root.slide1.value) + this.$root.step
    // }

    let percent1: number = this.$root.slide1.value / this.$root.max * 100
    let percent2: number = this.$root.slide2.value / this.$root.max * 100

    this.$root.track.style.background = `linear-gradient(
                                            to right,
                                            #dadae5 ${percent1}%,
                                            #3264fe ${percent1}%,
                                            #3264fe ${percent2}%,
                                            #dadae5 ${percent2}%)`

  }
}
