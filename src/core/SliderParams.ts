import { calcPos } from "./utils";

export class SliderParams {
  params: {
    min: number;
    max: number;
    step: number;
    value1: number;
    value2: number;
    pos1: number;
    pos2: number;
    multirange: boolean;
    orientation: string;
    tip: boolean;
  };

  private _defOpt: {
    min: number,
    max: number,
    step: number,
    value1: number,
    value2: number,
    multirange: boolean,
    orientation: string,
    tip: boolean
  }

  constructor(options?: {min?: number, max?: number, step?: number, value1?: number, value2?: number, multirange?: boolean, orientation?: string, tip?: boolean}) {

    this._defOpt = {
      min: 0,
      max: 100,
      step: 5,
      value1: 10,
      value2: 80,
      multirange: true,
      orientation: 'horizontal',
      tip: true
    }

    this.params = {
      min: options?.min ?? this._defOpt.min,
      max: options?.max ?? this._defOpt.max,
      step: options?.step ?? this._defOpt.step,
      value1: options?.value1 ?? this._defOpt.value1,
      value2: options?.value2 ?? this._defOpt.value2,
      multirange: options?.multirange ?? this._defOpt.multirange,
      orientation: options?.orientation ?? this._defOpt.orientation,
      tip: options?.tip || this._defOpt.tip,
      pos1: 0,
      pos2: 0,
    }

    this.params.pos1 = calcPos(this.params.value1, this.params.min, this.params.max)
    this.params.pos2 = calcPos(this.params.value2, this.params.min, this.params.max)
  }

  get defOpt() {
    return this._defOpt
  }

  get min() {
    return this.params.min
  }

  get max() {
    return this.params.max
  }

  get step() {
    return this.params.step
  }

  get value1() {
    return this.params.value1
  }

  get value2() {
    return this.params.value2
  }

  get pos1() {
    return this.params.pos1
  }

  get pos2() {
    return this.params.pos2
  }

  get orientation() {
    return this.params.orientation
  }

  get multirange() {
    return this.params.multirange
  }

  get tip() {
    return this.params.tip
  }

  set min(value) {
    this.params.min = value >= this.params.max ? this.params.max - this.params.step : value
  }

  set max(value) {
    this.params.max = value <= this.params.min ? this.params.min + this.params.step : value
  }

  set step(value) {
    this.params.step = value > 0 ? value : 1
  }

  set value1(value) {
    if (value >= this.params.value2) {
      this.params.value1 = this.params.value2 - this.params.step
    } else {
      if (this.multirange && value == this.params.max) {
        this.params.value1 = value - this.params.step
      } else {
        this.params.value1 = value
      }
    }
  }

  set value2(value) {
    if ( (this.params.value1 >= this.params.value2) && (this.params.value1 < this.params.max) ) {
      this.params.value2 = this.params.value1 + this.step
    } else {
      this.params.value2 = value
    }
  }

  set pos1(value) {
    this.params.pos1 = calcPos(value, this.params.min, this.params.max)
  }

  set pos2(value) {
    this.params.pos2 = calcPos(value, this.params.min, this.params.max)
  }

  set orientation(value) {
    this.params.orientation = value
  }

  set multirange(value) {
    this.params.multirange = value
  }

  set tip(value) {
    this.params.tip = value
  }
}
