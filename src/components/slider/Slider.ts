export class Slider {
  components: any
  $el: JQuery<HTMLElement>
  constructor(selector: string, options: { components: any }) {
    this.$el = $(selector)
    this.components = options.components || []
  }
}
