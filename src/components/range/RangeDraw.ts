import {Options, FillColor} from '../../core/interfaces'

export class RangeDraw {
  $root: JQuery<HTMLElement>
  options: Options
  slider1: JQuery<HTMLElement> | undefined
  slider2: JQuery<HTMLElement> | undefined
  rangeTrack: JQuery<HTMLElement> | undefined
  value_1: number | undefined
  value_2: number | undefined
  step: number | undefined

  constructor($root: JQuery<HTMLElement>, options: Options) {
    this.$root = $root
    this.options = options
    this.init()
  }

  init() {
    this.$root.children('input').each( (index: number, value: any) => {
      $(value).attr('data-input', index + 1)
    })
    this.slider2 =this.$root.children('input[data-input = "2"]')
    this.slider1 = this.$root.children('input[data-input = "1"]')
    this.rangeTrack = this.$root.children('.range__track')
    this.step = this.options.step
    this.value_1 = Number(this.slider2.val())
    this.value_2 = Number(this.slider2.val())

    this.drawRange()
  }

  drawRange(
    value_1: number = this.options.value1,
    value_2: number = this.options.value2,
    ) {
    this.slider1?.attr(setAttrRanges.bind(this)(value_1))
    this.slider2?.attr(setAttrRanges.bind(this)(value_2))
    drawSlide1.bind(this)()
    drawSlide2.bind(this)()
  }

  drawThumb_1() {
    drawSlide1.bind(this)()
  }

  drawThumb_2() {
    drawSlide2.bind(this)()
  }
}

function setAttrRanges(this: RangeDraw, currentValue: number) {
  return {
    value: currentValue,
    min: this.options.min,
    max: this.options.max,
    step: this.options.step
  }
}

function drawSlide1(this:any) {
  if (this.slider2.val() - this.slider1.val() <= this.step) {
    this.slider1.val(this.slider2.val() - this.step)
  }
  fillColor.bind(this)()
}

function drawSlide2(this: any) {
  if (this.slider2.val() - this.slider1.val() <= this.step) {
    // Реализовал через parseInt, так как не смог разобраться с багом
    this.slider2.val(parseInt(this.slider1.val()) + this.step)
  }
  fillColor.bind(this)()
}

function fillColor(this: FillColor) {
  let percent1: number = this.slider1.val() / this.options.max * 100
  let percent2: number = this.slider2.val() / this.options.max * 100

  this.rangeTrack.css('background', `linear-gradient(
    to right,
    #dadae5 ${percent1}%,
    #3264fe ${percent1}%,
    #3264fe ${percent2}%,
    #dadae5 ${percent2}%`)
}
