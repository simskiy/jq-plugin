import {Values} from '@components/values/Values'
import {Range} from '@components/range/Range'
import {Scale} from '@components/scale/Scale'
import {Observer} from '@core/Observer'
import {setOptions} from '@core/utils'
export class Slider {
  $el: JQuery
  observer: Observer
  components: Range[] | Values[] | Scale[] = []
  options: { [x: string]: string | number } | undefined

  constructor(selector: JQuery<HTMLElement>, options: { [x: string]: string | number } | undefined) {
    this.$el = selector
    this.observer = new Observer()
    this.options = options
  }
  static template = [Values, Range, Scale]

  render() {
    this.$el.append('<div class="slider"></div>')
    $(this.$el).addClass('dbl_slider-container')
    const $root = this.$el.children('.slider')
    setOptions()

   this.components = Slider.template.map((Component) => {
      $root.append(`<div class="${Component.className}"></div>`)
      const $el = this.$el.find(`.${Component.className}`)
      const component = new Component($el, {observer: this.observer})
      $el.append(component.toHTML())
      return component
    })
    this.components.forEach(component => {
      component.init()
    })
    return this
  }

  // получение параметров "на лету"
  set(options: {} | undefined) {
    setOptions(options)
    console.log(this.components)
  }
}
