export class Observer {
  $root: any;
  listeners: string[];

  constructor($root: any, listeners: string[]) {
    if(!$root) {
      throw new Error('no $root provided for Observer')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initListeners() {
    console.log(this.listeners)
  }
  removeListeners() {}
}
