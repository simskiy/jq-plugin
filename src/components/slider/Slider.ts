import {Track} from '@components/track/Track'
import {Thumb} from '@components/thumb/Thumb'
import {Scale} from '@components/scale/Scale'

interface Options {
  text: string;
  min?: number;
  max?: number;
}

export class Slider {
  $el: any
  txt: string

  constructor(selector: string, options: Options) {
    this.$el = $(selector)
    this.txt = options.text
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
