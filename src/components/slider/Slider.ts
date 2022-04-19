import {Values} from '@components/values/Values'
import {Range} from '@components/range/Range'
import {Scale} from '@components/scale/Scale'
import {ISliderComponent} from '@/core/SliderComponent'
import {Observer, IObserver} from '@core/Observer'
import {setOptions} from '@core/utils'
import {SliderOptions} from '@core/interfaces'

interface IComponents {
}
interface IComponentsConstructor {
  toHTML(): void
  prepare(): void
  init(): void
  new (el: JQuery, observer: IObserver): ISliderComponent
}

export class Slider {
  $el: JQuery
  observer: any
  components: ISliderComponent[] = [] /*что блять я здесь такое написал?!!! Полная хуйня!!! */
  // options: { [x: string]: string | number } | undefined
  options: SliderOptions

  constructor(selector: JQuery<HTMLElement>, options: SliderOptions) {
    this.$el = selector
    this.options = options
    this.observer = new Observer()
  }
  static template = [Values, Range, Scale]

  render() {
    this.$el.append('<div class="slider"></div>')
    $(this.$el).addClass('dbl_slider-container')
    const $root = this.$el.children('.slider')
    setOptions(this.options)

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
  set(options: {
    min?: number
    max?: number
    step?: number
    value1?: number
    value2?: number
    multirange?: boolean
  }) {
    setOptions(options)
    this.observer.emit('slider:set', options)
    // if (!options.multirange) this.observer.emit('multirange:off', options.multirange)
    // if (!options.multirange) this.observer.emit('slider:set', options)
  }
}
