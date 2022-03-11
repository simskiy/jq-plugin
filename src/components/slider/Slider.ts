import {Values} from '@components/values/Values'
import {Range} from '@components/range/Range'
import {Scale} from '@components/scale/Scale'
import { Observer } from '@core/Observer'
// import { initData } from '@core/interfaces'
import {setOptions} from './setOptions'
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
    console.log(this.components[0])
    return this
  }

  // получение параметров "на лету"
  set(options: any) {
    setOptions(options)
    console.log(this.components[0])
    console.log(this.components[0].min)
  }

  // getOptions(opt: { [x: string]: string | number } | Options | undefined): Options {
  //   // дефолтные параметры
  //   let defOpt = {
  //     min: 0,
  //     max: 100,
  //     value1: 10,
  //     value2: 80,
  //     step: 5,
  //     orientation: 'horizontal'
  //   }
  //   return {...defOpt, ...opt}
  // }
}
