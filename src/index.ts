import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'jquery'

import './styles/main.scss'
import {Slider} from '@components/slider/Slider'
import { SliderComponent } from './core/SliderComponent'
(function ($) {
  let slider: Slider
  $.fn.dblSlider = function (options) {
    slider = new Slider(this, options)
    slider.render()
    return this
  }
  $.fn.set = function (options = {}) {
    if (this.hasClass('dbl_slider-container')) {
      slider.set(options)
    } else {
      throw new Error("Slider is not render")
    }
    return this
  }
})(jQuery)

// $('#app').dblSlider({value1: 20})
// $('#app1').dblSlider({min: 0, max: 200, value1: 50, value2: 70})
let slider = $('#app2').dblSlider({min: 30})
$('button').on('click', () => {
  slider.set({value1: 30, value2: 50, max: 200})
  console.log(SliderComponent.prototype)
})
