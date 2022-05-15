import { Observer } from "./Observer";
import { SliderParams } from "./SliderParams";

export interface Options {
  name?: string
  observer: Observer
  listeners?: string[]
  params: SliderParams
}

export interface SliderOptions {
  min?: number
  max?: number
  value1?: number
  value2?: number
  step?: number
  orientation?: string
  multirange?: boolean
}

export interface Params {
  min?: number
  max?: number
  value1?: number
  value2?: number
  step?: number
  multirange?: boolean
  orientation?: string
  // [x: string]: number | boolean | string | undefined
}

export interface Slide {
  slider1: {val: (x?: number) => number}
  slider2: {val: (x?: number) => number}
  label1: {text: (x?:number | string) => string}
  label2: {text: (x?:number | string) => string}
  step: number
}
