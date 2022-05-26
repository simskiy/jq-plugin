import { SliderParams } from "@/core/SliderParams"
import {rounded} from "@/core/utils"

interface IScaleDraw {
  init(min: number, max: number): HTMLElement
}

export class ScaleDraw implements IScaleDraw {
  ul: HTMLElement
  params: SliderParams
  min: number
  max: number

  constructor(params: SliderParams) {
    this.ul = document.createElement('ul')
    this.params = params
    this.min = this.params.min
    this.max = this.params.max
  }

  init() {
    if (this.ul.hasChildNodes()) {
      this.ul.remove()
      this.ul = document.createElement('ul')
      this.min = this.params.min
      this.max = this.params.max
    }
    this.ul.className = 'scale__list'
    return this.draw()
  }

  draw() {
    let rullerDivision = rounded((this.params.max - this.params.min) / 10)

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


