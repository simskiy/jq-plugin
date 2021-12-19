import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'jquery'
import {Options} from '@core/interfaces'

import './styles/main.scss'
import {Slider} from '@components/slider/Slider'

// dblSlider: (arg0: JQuery, arg1?: {
//   min?: number;
//   max?: number;
//   value1?: number;
//   value2?: number;
//   step?: number;
//   orientation?: string;
// }) => JQuery

(function ($) {
  $.fn.dblSlider = function (options: Options) {
    const slider = new Slider(this, options)
    slider.render()
    return this
  }
})(jQuery)


$('#app').dblSlider({value1: 0})
$('#app1').dblSlider()
$('#app2').dblSlider()
