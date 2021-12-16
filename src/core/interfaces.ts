export interface Options {
  name?: string
  min: number
  max: number
  value1: number
  value2: number
  step?: number
  orientation?: string
  listeners?: string[];
}

export interface Slide {
  slider1: {val: (x?: number) => number }
  slider2: {val: (x?: number) => number }
}

export interface FillColor extends Slide {
  options: Options
  rangeTrack: { css: (arg0: string, arg1: string) => void }
}

// export class RangeDraw {
//   protected label2: JQuery<HTMLElement> | undefined
//   protected label1: JQuery<HTMLElement> | undefined
//   protected slider1: JQuery<HTMLElement> | undefined
//   protected slider2: JQuery<HTMLElement> | undefined
//   protected rangeTrack: JQuery<HTMLElement> | undefined
// }
