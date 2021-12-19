import {Values} from '@components/values/Values'
import {Range} from '@components/range/Range'
import {Scale} from '@components/scale/Scale'
import { Observer } from '@core/Observer'
import { Options } from '@core/interfaces'

export class Slider {
  $el: JQuery;
  observer: any;
  options: Options;

  constructor(selector: JQuery<HTMLElement>, options?: Options) {
    this.$el = selector
    this.observer = new Observer()
    this.options = this.defaultOptions(options)
  }
  static components = [Values, Range, Scale]

  render() {
    this.$el.append('<div class="slider"></div>')
    $(this.$el).addClass('dbl_slider-container')
    const $root = this.$el.children('.slider')

   const components = Slider.components.map((Component) => {
      $root.append(`<div class="${Component.className}"></div>`)
      const $el = this.$el.find(`.${Component.className}`)
      const component = new Component($el, this.options)
      $el.append(component.toHTML())
      return component
    })
    components.forEach(component => {
      component.init()
    })

    // return components
  }

  defaultOptions(opt: Options | undefined): Options {
    return {
      min: 0,
      max: 100,
      value1: 20,
      value2: 70,
      step: 5,
      orientation: 'horizontal'
    }
  }
}
