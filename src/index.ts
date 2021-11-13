import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'jquery'

import './styles/main.scss'
import {Slider} from './components/slider/Slider'

const slider = new Slider('#app', {
  text: 'hello',
})

slider.render()
