import { SliderParams } from "@/core/SliderParams"
import { Values } from "./Values"
export class ValueDraw {
  label1: HTMLElement
  label2: HTMLElement
  $el: Values
  params: SliderParams
  constructor(el: Values, params: SliderParams) {
    this.label1 = document.createElement('span')
    this.label2 = document.createElement('span')
    this.$el = el
    this.params = params
  }

  init() {
    for (let label of [this.label1, this.label2]) {
      label.classList.add('values__lable')
    }
    this.setValues()
    return [this.label1, this.label2]
  }

  setValues() {
    if(this.params.multirange) {
      this.label1.style.display = 'inline'
    } else {
      this.label1.style.display = 'none'
    }
    this.label1.textContent = this.params.value1.toString()
    this.label2.textContent = this.params.value2.toString()
  }

  changeValues(el: HTMLInputElement) {
    if (el.dataset.input === '1') {
      this.label1.textContent = Number(el.value) >= Number(this.label2.innerText) ? this.params.value1.toString() : el.value
    } else {
      this.label2.textContent = Number(el.value) <= Number(this.label1.innerText) ? this.params.value2.toString() : el.value
    }
  }
}
