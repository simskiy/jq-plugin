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
    return `  <span class="values__lable values__lable--one" data-label="1">0</span>
              <span class="values__lable values__lable--two" data-label="2">100</span>
            `
  }

  init() {
    super.init()
    this.label_1 = this.$root.find('[data-label = "1"]')
    this.label_2 = this.$root.find('[data-label = "2"]')
    this.observer.subscribe('thumb:input', this.setValues.bind(this))
  }

  setValues(el:HTMLInputElement) {
    if(el.dataset.input === '1') {
      this.label_1.text(el.value)
    } else {
      this.label_2.text(el.value)
    }
  }


}
