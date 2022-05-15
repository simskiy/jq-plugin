import { SliderComponent } from "@/core/SliderComponent"
import { SliderParams } from "@/core/SliderParams"

export interface IRangeDraw {
  init(): void
}
export class RangeDraw implements IRangeDraw{

  $root: JQuery<HTMLElement>
  track: HTMLElement
  slide2: HTMLInputElement
  slide1: HTMLInputElement
  params: SliderParams

  constructor($root: JQuery<HTMLElement>, params: SliderParams) {
    this.$root = $root
    this.track = document.createElement('div')
    this.slide1 = document.createElement('input')
    this.slide2 = document.createElement('input')
    this.params = params
  }

  init() {
    this.track.className = 'range__track'
    this.fillSliderProperty()

    this.drawTracks()

    return [this.track, this.slide1, this.slide2]
  }

   drawTracks(data?: string) {
    if (Number(this.slide2.value) - Number(this.slide1.value) < this.params.step && data) {
      this.stopThumb(data)
    } else {
      this.drawBackgroundRange(this.params.multirange)
      this.params.value1 = +this.slide1.value
      this.params.value2 = +this.slide2.value
    }
  }

  drawBackgroundRange(multirange: boolean) {
    let percent1: number = 0
    let percent2: number = 0

    if (multirange) {
      percent1 = (Number(this.slide1.value) - this.params.min) / (this.params.max - this.params.min) * 100
      percent2 = (Number(this.slide2.value) - this.params.min) / (this.params.max - this.params.min) * 100
    } else {
      percent1 = 0
      percent2 = +this.slide2.value / this.params.max * 100
    }
    this.track.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`
  }

  setRangeProperty() {
    this.fillSliderProperty()
    this.drawTracks()
  }

  private setMultiRange() {
    if (!this.params.multirange) {
      this.slide1.value = this.params.min.toString()
      this.slide1.style.display = 'none'
    } else {
      this.slide1.value = this.params.value1.toString()
      this.slide1.style.display = 'inline'

    }
  }

  private stopThumb(data: string) {
    switch (data) {
      case '1': {
        if (this.params.multirange) {
          this.slide1.value = (+this.slide2.value - this.params.step).toString()
        } else {
          this.slide1.value = this.params.min.toString()
        }
        this.params.value1 = +this.slide1.value
        break }
      case '2': {
        if (this.params.multirange) {
          this.slide2.value = (+this.slide1.value + this.params.step).toString()
        } else {
          this.slide2.value = this.slide1.value
        }
        this.params.value2 = +this.slide2.value
        break }
      default: throw new Error('Invalid data-input')
    }
  }

  private fillSliderProperty (this: RangeDraw) {
    for (let slide of [this.slide1, this.slide2]) {
      slide.min = this.params.min.toString()
      slide.max = this.params.max.toString()
      slide.step = this.params.step.toString()
      slide.type = 'range'
      slide.value = slide === this.slide1 ? this.params.value1.toString() : this.params.value2.toString()
      slide.dataset.input = slide === this.slide1? '1': '2'
    }
    this.setMultiRange()
  }
}



