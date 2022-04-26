import { SliderComponent } from "@/core/SliderComponent";

export function capitalize(string?: string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

interface Options {
  min?: number
  max?: number
  value1?: number
  value2?: number
  step?: number
  orientation?: string
}

export function setOptions(options?: Options):void {
  const opt = getOptions(options)
  const Slider = SliderComponent.prototype
  for (const [key, value] of Object.entries(opt)) {
    SliderComponent.prototype[key] = value
  }
}

function getOptions(opt?: Options) {
    const slider = SliderComponent.prototype
    // дефолтные параметры
    let defOpt = {
      min: slider.min || 0,
      max: slider.max || 100,
      value1: slider.value1 || 0,
      value2: slider.value2 || 80,
      step: slider.step || 5,
      orientation: slider.orientation || 'horizontal',
      multirange: slider.multirange || true
    }
    return {...defOpt, ...opt}
  }
