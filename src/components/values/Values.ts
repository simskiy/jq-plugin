import { Options } from "@/core/interfaces";
import { SliderComponent } from "@core/SliderComponent";

export class Values extends SliderComponent {
  static className = 'values'

  constructor($root: JQuery, options: Options) {
    super($root, {
      name: 'Values',
      listeners: [],
      ...options
    })
  }

  toHTML() {
    return `  <span id="label1" class="values__lable values__lable--one">0</span>
              <span id="label2" class="values__lable values__lable--two">100</span>
            `
  }
}
