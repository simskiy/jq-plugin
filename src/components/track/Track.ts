import { SliderComponent } from "@core/SliderComponent";

export class Track extends SliderComponent {
  toHTML() {
    return `<div class="slider__track">
              <div class="slider__track--busy data-thumb="first" style="right: 50%"></div>
              <div class="slider__track--busy data-thumb="second" style="display: none"></div>
            </div>`
  }
}
