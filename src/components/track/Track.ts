import { SliderComponent } from "@core/SliderComponent";

export class Track extends SliderComponent {
  static className = 'slider__track'

  constructor($root: JQuery) {
    super($root, {
      name: 'Track',
      listeners: []
    });

  }

  toHTML() {
    return `
              <div class="slider__track--busy data-track="first" style="right: 50%"></div>
              <div class="slider__track--busy data-track="second" style="display: none"></div>
            `
  }
}
