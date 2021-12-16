import {Options, FillColor} from '../../core/interfaces'

export class RangeDraw {
  $root: JQuery<HTMLElement>
  options: Options
  step: number | undefined

  constructor($root: JQuery<HTMLElement>, options: Options) {
    this.$root = $root
    this.options = options
    this.init()
  }

  private label2: JQuery<HTMLElement> | undefined
  private label1: JQuery<HTMLElement> | undefined
  private slider1: JQuery<HTMLElement> | undefined
  private slider2: JQuery<HTMLElement> | undefined
  private rangeTrack: JQuery<HTMLElement> | undefined

  init() {
    this.slider2 = this.$root.children('#slider-2')
    this.slider1 = this.$root.children('#slider-1')
    this.label1 = this.$root.prev().children('#label1')
    this.label2 = this.$root.prev().children('#label2')
    this.rangeTrack = this.$root.children('.range__track')
    this.step = this.options.step
  }

  drawRange() {
    this.slider1?.attr(setAttrRanges.bind(this)(this.options.value1))
    this.slider2?.attr(setAttrRanges.bind(this)(this.options.value2))
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

function drawSlide1(this: any) {
  if (this.slider2.val() - this.slider1.val() <= this.step) {
    this.slider1.val(this.slider2.val() - this.step)
  }
  this.label1.text(this.slider1.val())
  fillColor.bind(this)()
}

function drawSlide2(this: any) {
  if (this.slider2.val() - this.slider1.val() <= this.step) {
    // Реализовал через parseInt, так как не смог разобраться с багом
    this.slider2.val(parseInt(this.slider1.val()) + this.step)
  }
  this.label2.text(this.slider2[0].value)
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
