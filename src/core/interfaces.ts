import { Observer } from "./Observer";

export interface Options {
  // max: number;
  name?: string
  // min: number
  // max: number
  // value1: number
  // value2: number
  // step: number
  // orientation: string
  observer: Observer
  listeners?: string[]

  // DEBUG
  components?: any

  // [x: string]: string | number
}

export interface Slide {
  slider1: {val: (x?: number) => number}
  slider2: {val: (x?: number) => number}
  label1: {text: (x?:number | string) => string}
  label2: {text: (x?:number | string) => string}
  step: number
}
