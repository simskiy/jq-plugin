export class ValueDraw {
  $root: JQuery<HTMLElement>;
  min: number;
  max: number;
  label_1: JQuery<HTMLElement> | undefined;
  label_2: JQuery<HTMLElement> | undefined;
  constructor($root: JQuery, options: number[]) {
    this.$root = $root
    this.min = options[0]
    this.max = options[1]
    this.init()
  }

  init() {
    this.$root.children('span').each( (index: number, value: any) => {
      $(value).attr('data-label', index + 1)
    })
    this.label_1 = this.$root.children('span[data-label = "1"]')
    this.label_2 = this.$root.children('span[data-label = "2"]')
  }

  initValues() {
    this.label_1?.text(this.min)
    this.label_2?.text(this.max)
  }
}
