import {Values} from '@components/values/Values'
import {Range} from '@components/range/Range'
import {Scale} from '@components/scale/Scale'
import { Observer } from '@core/Observer'
import { Options } from '@core/interfaces'
// import { initData } from '@core/interfaces'

export class Slider {
  $el: JQuery
  observer: Observer
  options: Options
  components: Range[] | Values[] | Scale[] = []

  constructor(selector: JQuery<HTMLElement>, options: { [x: string]: string | number } | undefined) {
    this.$el = selector
    this.observer = new Observer()
    this.options = this.getOptions(options)
  }
  static template = [Values, Range, Scale]

  render() {
    this.$el.append('<div class="slider"></div>')
    $(this.$el).addClass('dbl_slider-container')
    const $root = this.$el.children('.slider')

   this.components = Slider.template.map((Component) => {
      $root.append(`<div class="${Component.className}"></div>`)
      const $el = this.$el.find(`.${Component.className}`)
      const component = new Component($el, {
        observer: this.observer,
        ...this.options,
      })

      $el.append(component.toHTML())
      return component
    })
    this.components.forEach(component => {
      component.init()
    })
    return this
  }

  // получение параметров "на лету"
  set(options: { min?: number | undefined; max?: number | undefined; value_1?: number | undefined; value_2?: number | undefined; step?: number | undefined } | undefined) {
    let opt = {...this.options, ...options}
    console.log(this.components[1].options.value1 = 25)
    console.log(this.components[0].options.value1)
    // console.log(this.components.findIndex(item => item.name === 'Range'))
    // console.log(this.components[1].slider.drawRange(opt.min, 50))
  }

  test() {

  }

  getOptions(opt: { [x: string]: string | number } | Options | undefined): Options {
    // дефолтные параметры
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
