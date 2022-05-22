import { Observer } from "./Observer";
import { SliderParams } from "./SliderParams";

export interface Options {
  name?: string
  observer: Observer
  listeners?: string[]
  params: SliderParams
}

export interface Params {
  min?: number
  max?: number
  value1?: number
  value2?: number
  step?: number
  multirange?: boolean
  orientation?: string
  tip?: boolean
}
