import { SliderComponent } from "@core/SliderComponent";

export class Thumb extends SliderComponent {
  static className = 'thumb'

  constructor($root: JQuery) {
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

  onClick(event: any): void {
    console.log('thumb onInput: ', event)
    console.log(this.$root)
  }
}
