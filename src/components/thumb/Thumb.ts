import { SliderComponent } from "@core/SliderComponent";

export class Thumb extends SliderComponent {
  toHTML() {
    return `<div class="slider__thumb" style="left: 50%"></div>`
  }
}
