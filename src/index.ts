import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'jquery'

import './styles/main.scss'
import {Slider} from '@components/slider/Slider'

(function($) {
  $.fn.dblSlider = function () {
    const slider = new Slider(this)
    slider.render()
    return this
  }
})(jQuery)

$('#app').dblSlider()
$('#app1').dblSlider()
$('#app2').dblSlider()
