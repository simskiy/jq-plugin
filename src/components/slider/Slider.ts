import {Values} from '@components/values/Values'
import {Range} from '@components/range/Range'
import {Scale} from '@components/scale/Scale'
import {ISliderComponent} from '@/core/SliderComponent'
import {Observer, IObserver} from '@core/Observer'
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
    this.slider.classList.add('dbl_slider')
    this.$el.append(this.slider)
    $(this.$el).addClass('dbl_slider-container')
    const $root = this.$el.children('.dbl_slider')

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
    this.params.min = options.min ?? this.params.min
    this.params.max = options.max || this.params.max
    this.params.step = options.step || this.params.step
    this.params.value1 = options.value1 ?? this.params.value1
    this.params.value2 = options.value2 || this.params.value2
    this.params.multirange = options.multirange ?? this.params.multirange
    this.params.orientation = options.orientation || this.params.orientation
    this.params.tip = options.tip ?? this.params.tip

    this.observer.emit('range:set')
    this.observer.emit('value:set')
    this.observer.emit('scale:set')
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
