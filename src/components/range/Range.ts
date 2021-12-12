import { SliderComponent } from "@core/SliderComponent";

export class Range extends SliderComponent {
  static className = 'range'

  constructor($root: JQuery) {
    super($root, {
      name: 'Range',
      listeners: ['input'],
      min: undefined,
      max: undefined,
      value1: undefined,
      value2: undefined,
      step: undefined
    });
  }

  slider1: JQuery<HTMLElement> | undefined
  slider2: JQuery<HTMLElement> | undefined
  label1: JQuery<HTMLElement> | undefined
  label2: JQuery<HTMLElement> | undefined
  rangeTrack: JQuery<HTMLElement> | undefined

  toHTML() {
    return `
            <div class="range__track"></div>
            <input type="range" id="slider-1">
            <input type="range" id="slider-2">
            `
  }

  onInput(event: Event) {
    if (this.slider1 && event.target === this.slider1[0]) {
      drawSlide1.bind(this)()
    }
    if (this.slider2 && event.target === this.slider2[0]) {
      drawSlide2.bind(this)()
    }
  }

  initComponent () {
    this.slider1 = this.$root.children('#slider-1')
    this.slider2 = this.$root.children('#slider-2')
    this.label1 = this.$root.prev().children('#label1')
    this.label2 = this.$root.prev().children('#label2')
    this.rangeTrack = this.$root.children('.range__track')

    if (this.slider1) this.slider1.attr(setAttrRanges.bind(this)(this.value1))
    if (this.slider2) this.slider2.attr(setAttrRanges.bind(this)(this.value2))

    drawSlide1.bind(this)()
    drawSlide2.bind(this)()
  }
}

function setAttrRanges(this: any, currentValue: number) {
  return {
    value: currentValue,
    min: this.min,
    max: this.max,
    step: this.step
  }
}


function drawSlide1(this: any) {
  if (this.slider2.val() - this.slider1.val() <= this.step) {
    this.slider1.val(this.slider2.val() - this.step)
  }
  this.label1.text(this.slider1.val())

  fillColor.bind(this)()
}
/* Реализовал через нативный JS, так как не смог разобраться с багом JQuery. */
function drawSlide2(this: any) {
  if (this.slider2.val() - this.slider1.val() < this.step) {
    this.slider2[0].value = parseInt(this.slider1[0].value) + this.step
  }
  this.label2.text(this.slider2.val())
  fillColor.bind(this)()
}

function fillColor(this: any) {
  const percent1 = this.slider1.val() / this.max * 100
  const percent2 = this.slider2.val() / this.max * 100

  this.rangeTrack.css('background', `linear-gradient(
    to right,
    #dadae5 ${percent1}%,
    #3264fe ${percent1}%,
    #3264fe ${percent2}%,
    #dadae5 ${percent2}%`)
}
