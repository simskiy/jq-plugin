interface JQuery {
  dblSlider: (options?: {[x: string]: string | number}) => JQuery
  set: (options?: {
    min?: number,
    max?: number,
    value1?: number,
    value2?: number,
    step?: number,
  }) => JQuery
}
