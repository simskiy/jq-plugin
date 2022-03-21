interface IScaleDraw {
  init(min: number, max: number): HTMLElement
}

export class ScaleDraw implements IScaleDraw {
  constructor() {
  }

  init(min: number, max: number) {
    let rullerDivision = rounded((max - min) / 10)

    const ul = document.createElement('ul')
    ul.className = 'scale__list'
    for (let i = 0; i < 11; i++) {
      let li = document.createElement('li')
      li.className = 'scale__label'
      li.textContent = rounded(min).toString()
      ul.append(li)
      min += rullerDivision
    }
    return ul
  }
}

function rounded(num: number) {
  return Number(num.toFixed(1))
}
