import { SliderComponent } from "@core/SliderComponent";

export class Values extends SliderComponent {
  static className = 'values'

  constructor($root: JQuery) {
    super($root, {
      name: 'Values',
      listeners: []
    });

  }

  toHTML() {
    return `  <span id="range1" class="values__lable values__lable--one">0</span>
              <span id="range2" class="values__lable values__lable--two">100</span>
            `
  }

  initComponent() {
    console.log('init values')
  }
}
