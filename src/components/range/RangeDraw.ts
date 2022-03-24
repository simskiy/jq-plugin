import { setOptions } from "@/core/utils"
import { SliderComponent } from "@/core/SliderComponent"

export interface IRangeDraw {
  init(): void
}
export class RangeDraw implements IRangeDraw{

  // $root: Range
  track: HTMLElement
  slide2: HTMLInputElement
  slide1: HTMLInputElement

  value1: number
  value2: number
  min: number
  max: number
  step: number

  constructor() {
    this.track = document.createElement('div')
    this.slide1 = document.createElement('input')
    this.slide2 = document.createElement('input')

    this.value1 = 0
    this.value2 = 100
    this.min = 0
    this.max = 100
    this.step = 1

    this.initValues()
  }

  init(options?: {}) {
    setOptions(options)
    this.track.className = 'range__track'
    this.fillSliderProperty()
    this.drawTrack()

    return [this.track, this.slide1, this.slide2]
  }

   drawTrack(data?: string) {
    let percent1: number = Number(this.slide1.value) / this.max * 100
    let percent2: number = Number(this.slide2.value) / this.max * 100

    if (Number(this.slide2.value) - Number(this.slide1.value) < this.step && data) {
      this.stopThumb(data)
    } else {
      this.track.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`
      this.value1 = +this.slide1.value
      this.value2 = +this.slide2.value
    }
  }

  initValues() {
    this.value1 = SliderComponent.prototype.value1
    this.value2 = SliderComponent.prototype.value2
    this.min = SliderComponent.prototype.min
    this.max = SliderComponent.prototype.max
    this.step = SliderComponent.prototype.step
  }

  getSliderProperty() {
    this.initValues()
    this.fillSliderProperty()
    this.drawTrack()
  }

  private stopThumb(data: string) {
    switch (data) {
      case '1': this.slide1.value = (+this.slide2.value - this.step).toString(); break;
      case '2': this.slide2.value = (+this.slide1.value + this.step).toString(); break;
      default: throw new Error('Invalid data-input')
    }
  }

  private fillSliderProperty (this: RangeDraw) {
    for (let slide of [this.slide1, this.slide2]) {
      slide.min = this.min.toString()
      slide.max = this.max.toString()
      slide.step = this.step.toString()
      slide.type = 'range'
      slide.value = slide === this.slide1 ? this.value1.toString() : this.value2.toString()
      slide.dataset.input = slide === this.slide1? '1': '2'
    }
  }
}


