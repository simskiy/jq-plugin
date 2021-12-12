import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'jquery'

import './styles/main.scss'
import {Slider} from '@components/slider/Slider'

(function($) {
  $.fn.dblSlider = function (options: any) {
    console.log(options)
    const slider = new Slider(this)
    slider.render()
    return this
  }
})(jQuery)

$('#app').dblSlider({min:0, max: 100})
