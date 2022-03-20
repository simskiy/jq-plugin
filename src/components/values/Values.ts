import { Options } from "@/core/interfaces";
import { ISliderComponent, SliderComponent } from "@core/SliderComponent";
import { ValueDraw } from "./ValueDraw";


export interface IValues extends ISliderComponent {}

export class Values extends SliderComponent implements IValues {
  static className = 'values'

  constructor($root: JQuery, options: Options) {
    super($root, {
      name: 'Values',
      listeners: [],
    })
  }

  toHTML() {
    return `  <span class="values__lable values__lable--one">0</span>
              <span class="values__lable values__lable--two">100</span>
            `
  }

  prepare() {
    this.value = new ValueDraw(this.$root, [this.value1, this.value2])
  }

  init() {
    super.init()
    this.prepare()
    this.value.initValues()
    this.label_1 = this.$root.find('[data-label = "1"]')
    this.label_2 = this.$root.find('[data-label = "2"]')
    // this.observer.subscribe('thumb:input', this.setValues.bind(this))
  }

  setValues(el:HTMLInputElement) {
    if(el.dataset.input === '1') {
      this.label_1.text(el.value)
    } else {
      this.label_2.text(el.value)
    }
  }
}
