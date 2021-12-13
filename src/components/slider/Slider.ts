import {Values} from '@/components/values/Values'
import {Range} from '@/components/range/Range'
import {Scale} from '@components/scale/Scale'

export class Slider {
  $el: JQuery;

  constructor(selector: JQuery<HTMLElement>) {
    this.$el = selector
  }
  static components = [Values, Range, Scale]


  render() {
    this.$el.append('<div class="slider"></div>')
    $(this.$el).addClass('dbl_slider-container')
    const $root = this.$el.children('.slider')

   const components = Slider.components.map((Component) => {
      $root.append(`<div class="${Component.className}"></div>`)
      const $el = this.$el.find(`.${Component.className}`)
      const component = new Component($el)
      $el.append(component.toHTML())
      return component
    })
    components.forEach(component => {
      component.init()
    })
    // return components
  }
}
