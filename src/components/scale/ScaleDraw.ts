import { SliderComponent } from "@/core/SliderComponent"
import { Slider } from "../slider/Slider"

interface IScaleDraw {
  init(min: number, max: number): HTMLElement
}

export class ScaleDraw implements IScaleDraw {
  ul: HTMLElement
  min: number
  max: number

  constructor() {
    this.ul = document.createElement('ul')
    this.min = SliderComponent.prototype.min
    this.max = SliderComponent.prototype.max
  }

  init() {
    if (this.ul.hasChildNodes()) {
      this.ul.remove()
      this.ul = document.createElement('ul')
      this.min = SliderComponent.prototype.min
      this.max = SliderComponent.prototype.max
    }
    this.ul.className = 'scale__list'
    return this.draw()
  }

  draw() {
    let rullerDivision = rounded((this.max - this.min) / 10)

    for (let i = 0; i < 11; i++) {
      let li = document.createElement('li')
      li.className = 'scale__label'
      li.textContent = rounded(this.min).toString()
      this.ul?.append(li)
      this.min += rullerDivision
    }
    return this.ul
  }
}

function rounded(num: number) {
  return Number(num.toFixed(1))
}
