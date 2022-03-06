interface JQuery {
  dblSlider: (options?: {[x: string]: string | number}) => JQuery
  set: (options?: {
    min?: number,
    max?: number,
    value_1?: number,
    value_2?: number,
    step?: number,
  }) => JQuery
}
