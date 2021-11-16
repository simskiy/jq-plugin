import { SliderComponent } from "@core/SliderComponent";

export class Thumb extends SliderComponent {
  static className = 'thumb'

  constructor($root: any) {
    super($root, {
      name: 'Thumb',
      listeners: ['click']
    });
  }

  toHTML() {
    return `
            <div class="thumb__track" style="left: 50%"></div>
            <div class="thumb__track" style="display: none"></div>
            `
  }

  onInput(event: any) {
    console.log('thumb onInput: ', event)
  }
}
