import {Values} from '@components/values/Values'
import {Range} from '@components/range/Range'
import {Scale} from '@components/scale/Scale'
import {ISliderComponent} from '@/core/SliderComponent'
import {SliderComponent} from '@/core/SliderComponent'
import {Observer, IObserver} from '@core/Observer'
import {SliderOptions} from '@core/interfaces'
import { SliderParams } from '@/core/SliderParams'

import { Params } from '@core/interfaces'
export class Slider {
  $el: JQuery
  observer: Observer
  components: ISliderComponent[] = [] /*что блять я здесь такое написал?!!! Полная хуйня!!! */
  slider: HTMLDivElement
  params: SliderParams


  constructor(selector: JQuery<HTMLElement>, options?: Params) {
    this.$el = selector
    this.observer = new Observer()
    this.params = new SliderParams(options)
    this.slider = document.createElement('div')
  }
  static template = [Values, Range, Scale]

  render() {
    this.slider.classList.add('slider')
    this.$el.append(this.slider)
    $(this.$el).addClass('dbl_slider-container')
    const $root = this.$el.children('.slider')

   this.components = Slider.template.map((Component) => {
      $root.append(`<div class="${Component.className}"></div>`)
      const $el = this.$el.find(`.${Component.className}`)
      const component = new Component($el, {observer: this.observer, params: this.params})
      $el.append(component.toHTML())

      return component
    })
    this.components.forEach(component => {
      component.init()
    })
    this.setOrientation(this.params.orientation)
    return this
  }

  // получение параметров "на лету"
  set(options: Params) {
    // Object.keys(options).forEach((key) => {
    //   if (isKey(options, key)) {
    //     this.params[key]
    //   }
    // })
    let temp = {...this.params.defOpt, ...options}
    Object.entries(temp).forEach( (key, value) => {
      console.log(key)
    })

    this.observer.emit('slider:set')
    this.setOrientation(this.params.orientation)
  }

  private setOrientation(value: string) {
    const vertical = 'dbl_slider-container--vertical'
    const horizontal = 'dbl_slider-container--horizontal'

    switch (value) {
      case 'horizontal': {
        this.$el.addClass(horizontal)
        this.$el.removeClass(vertical)}
        break
      case 'vertical': {
        this.$el.addClass(vertical)
        this.$el.removeClass(horizontal)}
        break
      default: throw new Error('Invalid value of orientation slider')
    }
  }
}

function isKey<T>(x: T, k: PropertyKey): k is keyof T {
  return k in x
}
