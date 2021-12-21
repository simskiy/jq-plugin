import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'jquery'
import {initData} from '@core/interfaces'

import './styles/main.scss'
import {Slider} from '@components/slider/Slider'

(function ($) {
  $.fn.dblSlider = function (options: initData) {
    const slider = new Slider(this, options)
    slider.render()
    return this
  }
})(jQuery)


$('#app').dblSlider({value1: 20})
// // $('#app1').dblSlider({min: 0, max: 200, value1: 50, value2: 70})
// $('#app2').dblSlider()
