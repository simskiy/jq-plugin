import {Track} from '@components/track/Track'
import {Thumb} from '@components/thumb/Thumb'
import {Scale} from '@components/scale/Scale'


export class Slider {
  $el: JQuery;

  constructor(selector: string) {
    this.$el = $(selector)
  }

  static components = [Track, Thumb, Scale]

  render() {
    this.$el.append('<div class="slider"></div>')
    const $root = this.$el.children('.slider')

   const components = Slider.components.map((Component) => {
      $root.append(`<div class="${Component.className}"></div>`)
      const $el = $(`.slider .${Component.className}`)
      const component = new Component($el)
      $el.append(component.toHTML())
      return component
    })
  components.forEach(component => component.init())
  }
}
