import { SliderComponent } from "@core/SliderComponent";

export class Range extends SliderComponent {
  static className = 'range'

  constructor($root: JQuery) {
    super($root, {
      name: 'Range',
      listeners: ['click']
    });
  }

  toHTML() {
    return `
            <div class="range__track"></div>
            <input type="range" min="0" max="100" step="5" value="0" id="slider-1">
            <input type="range" min="0 "max="100 "step="5" value="70" id="slider-2">
            `
  }

  onClick(event: any): void {
    console.log('thumb onInput: ', event)
  }

  initComponent () {
    console.log($(this))
  }
}
