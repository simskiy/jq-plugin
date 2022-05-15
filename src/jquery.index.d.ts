interface Options {
  min?: number
  max?: number
  value1?: number
  value2?: number
  step?: number
  orientation?: string
  multirange?: boolean
}

interface JQuery {
  dblSlider: (options?: Options) => JQuery
  set: (options: Options) => JQuery
}


