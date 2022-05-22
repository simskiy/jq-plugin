import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'jquery'

import '../styles/main.scss'
import {Slider} from '@components/slider/Slider'

(function ($) {
  let slider: Slider
  $.fn.dblSlider = function (options) {
    slider = new Slider(this, options)
    slider.render()
    return this
  }
  $.fn.set = function (options) {
    if (this.hasClass('dbl_slider-container')) {
      slider.set(options)
    } else {
      throw new Error("Slider is not render")
    }
    return this
  }
})(jQuery)
