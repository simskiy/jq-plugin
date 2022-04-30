import { setOptions } from "@/core/utils"
import { SliderComponent } from "@/core/SliderComponent"
import { Slider } from "../slider/Slider"

export interface IRangeDraw {
  init(): void
}
export class RangeDraw implements IRangeDraw{

  $root: JQuery<HTMLElement>
  track: HTMLElement
  slide2: HTMLInputElement
  slide1: HTMLInputElement

  value1: number
  value2: number
  min: number
  max: number
  step: number
  multirange: boolean

  constructor($root: JQuery<HTMLElement>) {
    this.$root = $root
    this.track = document.createElement('div')
    this.slide1 = document.createElement('input')
    this.slide2 = document.createElement('input')

    this.value1 = 0
    this.value2 = 100
    this.min = 0
    this.max = 100
    this.step = 1
    this.multirange = true

    this.initValues()
  }

  init(options?: {}) {
    this.track.className = 'range__track'
    this.fillSliderProperty()
    this.drawTracks()

    return [this.track, this.slide1, this.slide2]
  }

   drawTracks(data?: string) {
    if (Number(this.slide2.value) - Number(this.slide1.value) < this.step && data) {
      this.stopThumb(data)
    } else {
      this.drawBackgroundRange(SliderComponent.prototype.multirange)
      this.value1 = +this.slide1.value
      this.value2 = +this.slide2.value
    }
  }

  drawBackgroundRange(multirange: boolean) {
    let percent1: number = 0
    let percent2: number = 0

    if (multirange) {
      percent1 = (Number(this.slide1.value) - this.min) / (this.max - this.min) * 100
      percent2 = (Number(this.slide2.value) - this.min) / (this.max - this.min) * 100
    } else {
      percent1 = 0
      percent2 = +this.slide2.value / this.max * 100
    }
    this.track.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`
  }

  private initValues() {
    this.value1 = SliderComponent.prototype.value1
    this.value2 = SliderComponent.prototype.value2
    this.min = SliderComponent.prototype.min
    this.max = SliderComponent.prototype.max
    this.step = SliderComponent.prototype.step
    this.multirange = SliderComponent.prototype.multirange
  }

  setRangeProperty() {
    this.initValues()
    this.fillSliderProperty()
    this.drawTracks()
  }

  private setMultiRange() {
    if (!SliderComponent.prototype.multirange) {
      this.slide1.value = this.min.toString()
      this.slide1.style.display = 'none'

    } else {
      this.slide1.value = this.value1.toString()
      this.slide1.style.display = 'inline'

    }
  }

  private stopThumb(data: string) {
    switch (data) {
      case '1': {
        if (this.multirange) {
          this.slide1.value = (+this.slide2.value - this.step).toString()
        } else {
          this.slide1.value = this.min.toString()
        }
        this.fillValuesSliderComponent({value1: this.value1})
        break }
      case '2': {
        if (this.multirange) {
          this.slide2.value = (+this.slide1.value + this.step).toString()
        } else {
          this.slide2.value = this.slide1.value
        }
        this.fillValuesSliderComponent({value2: this.value2})
        break }
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
    this.setMultiRange()
  }

  private fillValuesSliderComponent(values: {
    min?: number
    max?: number
    step?: number
    value1?: number
    value2?: number
  } = {}) {
      SliderComponent.prototype.min = values.min || this.min
      SliderComponent.prototype.max = values.max || this.max
      SliderComponent.prototype.step = values.step || this.step
      SliderComponent.prototype.value1 = values.value1 || this.value1
      SliderComponent.prototype.value2 = values.value2 || this.value2
    }
  }



