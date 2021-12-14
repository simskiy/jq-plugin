export class RangeDraw {
  $root: JQuery<HTMLElement>
  constructor($root: JQuery<HTMLElement>) {
    this.$root = $root
  }

  drawSlide_1() {
    console.log('thumb1')
  }

  drawSlide_2() {
    console.log('thumb2')
  }
}
