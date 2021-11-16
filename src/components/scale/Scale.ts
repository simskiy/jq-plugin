import { SliderComponent } from "@core/SliderComponent";

export class Scale extends SliderComponent {
  static className = 'scale'

  constructor($root: any) {
    super($root, {
      name: 'Scale',
      listeners: []
    })
  }

  toHTML() {
    return `  <ul class="scale__inner">
                <li class="scale__point">0</li>
                <li class="scale__point">10</li>
                <li class="scale__point">20</li>
                <li class="scale__point">30</li>
                <li class="scale__point">40</li>
                <li class="scale__point">50</li>
                <li class="scale__point">60</li>
                <li class="scale__point">70</li>
                <li class="scale__point">80</li>
                <li class="scale__point">90</li>
                <li class="scale__point">100</li>
              </ul>
           `
  }
}
