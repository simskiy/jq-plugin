import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'jquery'

import './styles/main.scss'
import {Slider} from '@components/slider/Slider'
import { SliderComponent } from './core/SliderComponent'
import { SliderOptions } from './core/interfaces'

(function ($) {
  let slider: Slider
  $.fn.dblSlider = function (options = {}) {
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
$('#app1').dblSlider({min: -60, max: 60, value2: 0, value1: 0,  multirange: false})
let slider = $('#app2').dblSlider({min: 0, max: 100, value1: 20, value2: 50})
// $('#mr').on('change', () => slider.set({ value1: 30, max: 200, multirange: false}))
$('#mr').on('change', function () {
  if ($('#mr').prop('checked')) {
    slider.set({multirange: true, orientation: 'horizontal'})
  } else {
    slider.set({multirange: false, orientation: 'vertical'})
  }
})
