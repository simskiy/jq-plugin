import { SliderComponent } from "@/core/SliderComponent";

interface Options {
  min?: number
  max?: number
  value1?: number
  value2?: number
  step?: number
  orientation?: string
}

export function setOptions(options: Options):void {
  const opt = getOptions(options)
  const Slider = SliderComponent.prototype
  for (const [key, value] of Object.entries(opt)) {
    SliderComponent.prototype[key] = value
  }
}

function getOptions(opt: Options) {
    // дефолтные параметры
    let defOpt = {
      min: 0,
      max: 100,
      value1: 10,
      value2: 80,
      step: 5,
      orientation: 'horizontal'
    }
    return {...defOpt, ...opt}
  }

  setOptions({min: 0})
