import {Values} from '@/components/values/Values'
import {Range} from '@/components/range/Range'
import {Scale} from '@components/scale/Scale'
import { Observer } from '@/core/Observer';

const MIN_VALUE = 0
const MAX_VALUE = 100
const ORIENTATION = 'vertical'
const VALUE_1 = 10
const VALUE_2 = 70
const STEP = 5

export class Slider {
  $el: JQuery;
  observer: Observer;

  constructor(selector: JQuery<HTMLElement>) {
    this.$el = selector
    this.observer = new Observer()
  }
  static components = [Values, Range, Scale]

  render() {
    this.$el.append('<div class="slider"></div>')
    $(this.$el).addClass('dbl_slider-container')
    const $root = this.$el.children('.slider')

   const components = Slider.components.map((Component) => {
      $root.append(`<div class="${Component.className}"></div>`)
      const $el = this.$el.find(`.${Component.className}`)
      const component = new Component($el, this.getOptions())
      $el.append(component.toHTML())
      return component
    })
    components.forEach(component => {
      component.init()
    })
    // return components
  }

  getOptions () {
    return {
      min: MIN_VALUE,
      max: MAX_VALUE,
      value1: VALUE_1,
      value2: VALUE_2,
      step: STEP,
      orientation: ORIENTATION
    }
  }
}
