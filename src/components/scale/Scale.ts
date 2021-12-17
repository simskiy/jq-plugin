import { SliderComponent } from "@core/SliderComponent";

export class Scale extends SliderComponent {
  static className = 'scale'

  constructor($root: JQuery) {
    super($root, {
      name: 'Scale',
      listeners: []
    })
  }

  toHTML() {
    return `
            <ul class="scale__list">
              <li class="scale__label">0</li>
              <li class="scale__label">10</li>
              <li class="scale__label">20</li>
              <li class="scale__label">30</li>
              <li class="scale__label">40</li>
              <li class="scale__label">50</li>
              <li class="scale__label">60</li>
              <li class="scale__label">70</li>
              <li class="scale__label">80</li>
              <li class="scale__label">90</li>
              <li class="scale__label">100</li>
            </ul>
           `
  }
}
