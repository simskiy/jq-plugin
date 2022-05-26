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
    this.params.pos1 = this.params.value1
    this.params.pos2 = +this.params.value2
    return [this.track, this.slide1, this.slide2]
  }

  drawTracks(data?: string) {
    if (!this.params.multirange) {
      this.slide2.style.display = 'none'
    } else {
      this.slide2.style.display = 'inline'
    }

    if (Number(this.slide2.value) - Number(this.slide1.value) < this.params.step && data) {
      this.stopThumb(data)
    }
    this.drawBackgroundRange(this.params.multirange)
  }

  drawBackgroundRange(multirange: boolean) {
    const doubleThumb = `linear-gradient(to right, #dadae5 ${this.params.pos1}%, #000 ${this.params.pos1}%, #000 ${this.params.pos2}%, #dadae5 ${this.params.pos2}%)`
    const singleThumb = `linear-gradient(to right, #000 0%, #000 ${this.params.pos1}%, #dadae5 ${this.params.pos1}%)`
    this.track.style.background = multirange ? doubleThumb : singleThumb
  }

  setRangeProperty() {
    this.fillSliderProperty()
    this.drawTracks()
  }

  private stopThumb(data: string) {
    switch (data) {
      case '1': {
        if (this.params.multirange) {
          this.slide1.value = (+this.slide2.value - this.params.step).toString()
        }
        this.params.value1 = +this.slide1.value
        this.params.pos1 = this.params.value1
        break }
      case '2': {
        if (this.params.multirange) {
          this.slide2.value = (+this.slide1.value + this.params.step).toString()
        }
        this.params.value2 = +this.slide2.value
        this.params.pos2 = this.params.value2
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
  }
}



