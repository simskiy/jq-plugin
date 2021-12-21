import {Values} from '@components/values/Values'
import {Range} from '@components/range/Range'
import {Scale} from '@components/scale/Scale'
import { Observer } from '@core/Observer'
import { Options } from '@core/interfaces'
import { initData } from '@core/interfaces'

export class Slider {
  $el: JQuery;
  observer: Observer;
  options: Options;

  constructor(selector: JQuery<HTMLElement>, options: { [x: string]: string | number } | undefined) {
    this.$el = selector
    this.observer = new Observer()
    this.options = this.getOptions(options)
  }
  static components = [Values, Range, Scale]

  render() {
    this.$el.append('<div class="slider"></div>')
    $(this.$el).addClass('dbl_slider-container')
    const $root = this.$el.children('.slider')

   const components = Slider.components.map((Component) => {
      $root.append(`<div class="${Component.className}"></div>`)
      const $el = this.$el.find(`.${Component.className}`)
      const component = new Component($el, {
        ...this.options,
        observer: this.observer,

      })

      $el.append(component.toHTML())
      return component
    })
    components.forEach(component => {
      component.init()
    })
    // return components
  }

  getOptions(opt: { [x: string]: string | number } | Options | undefined): Options {
    let defOpt = {
      min: 0,
      max: 100,
      value1: 10,
      value2: 80,
      step: 5,
      orientation: 'horizontal'
    }
    return {...defOpt, ...opt}
  }
}
