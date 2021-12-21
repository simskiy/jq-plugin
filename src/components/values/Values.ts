import { Options } from "@/core/interfaces";
import { SliderComponent } from "@core/SliderComponent";


export class Values extends SliderComponent {
  static className = 'values'

  constructor($root: JQuery, options: Options) {
    super($root, {
      name: 'Values',
      listeners: [],
      ...options
    })
  }

  toHTML() {
    return `  <span class="values__lable values__lable--one">0</span>
              <span class="values__lable values__lable--two">100</span>
            `
  }

  init() {
    super.init()
    this.observer.subscribe('thumb:input', this.setValues)
    this.observer.subscribe('thumb:init', this.min, this.max)
  }

  setValues($root: JQuery<HTMLElement>, el: HTMLInputElement) {
    // этот кусок надо оптимизировать (постоянно создается вызов)
    const label1 = $root.siblings('.values').children('.values__lable--one')
    const label2 = $root.siblings('.values').children('.values__lable--two')
    if (el.dataset.input === '1') {
      label1.text(el.value)
    } else {
      label2.text(el.value)
    }
  }
}
