import { SliderComponent } from "@/core/SliderComponent"
import { Slider } from "../slider/Slider"
export class ValueDraw {
  label1: HTMLElement
  label2: HTMLElement
  constructor() {
    this.label1 = document.createElement('span')
    this.label2 = document.createElement('span')
  }

  init() {
    for (let label of [this.label1, this.label2]) {
      label.classList.add('values__lable')
    }
    this.label1.textContent = SliderComponent.prototype.value1
    this.label2.textContent = SliderComponent.prototype.value2
    return [this.label1, this.label2]
  }

  setValues(el: HTMLInputElement) {
    if (el.dataset.input === '1') {
      this.label1.textContent = Number(el.value) >= Number(this.label2.innerText) ? SliderComponent.prototype.value1 : el.value
    } else {
      this.label2.textContent = Number(el.value) <= Number(this.label1.innerText) ? SliderComponent.prototype.value2 : el.value
    }
  }
}
