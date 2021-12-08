import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'jquery'

import './styles/main.scss'
import {Slider} from './components/slider/Slider'


// eslint-disable-next-line quotes


/*
const slider1 = $('#slider-1')
const slider2 = $('#slider-2')
const displayRangeOne = $('#range1')
const displayRangeTwo = $('#range2')
const minGap = 0

const valueLabelOne = $('.values__lable--one')
const valueLabelTwo = $('.values__lable--two')

const rangeTrack = $('.range__track')
const sliderMaxValue = Number(slider1.attr('max'))

window.onload = function() {
  slider1(undefined)
  slider2()
}



slider1.on('input', (event) => {
  slide1(event)
})
slider2.on('input', slide2)



//----------- scale ------------------
const scaleList = $('.scale__list')
const scaleLable = $('.scale__lable')
const maxWidthLable = maxWidthScale(scaleLable)
const widthThumb = 10;

// позиционирование шкалы ----------------
function maxWidthScale(elem: JQuery<HTMLElement>) {
  let arr: any = []
  elem.each((index, value) => {
    arr.push(($(value).width()))
  })
  return Math.max.apply(null, arr)
}
*/

const slider = new Slider('#app')

slider.render()
