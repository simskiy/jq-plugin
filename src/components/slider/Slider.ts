import {Track} from '@components/track/Track'
import {Thumb} from '@components/thumb/Thumb'
import {Scale} from '@components/scale/Scale'

export class Slider {
  $el: any
  options: object
  constructor(selector: string, options: object) {
    this.$el = $(selector)
    this.options = options
  }

  static components = [Track, Thumb, Scale]

  render() {
    this.$el.append('<div class="slider"></div>')
    const $root = this.$el.children('.slider')

   Slider.components.forEach((Component: new () => any) => {
      const component = new Component()
      $root.append(component.toHTML())
    })
  }
}
