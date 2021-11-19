import 'core-js/stable'
import 'regenerator-runtime/runtime'
import 'jquery'

import './styles/main.scss'
import '@js/sum.ts'

// eslint-disable-next-line quotes

const slider1 = $('#slider-1')
const slider2 = $('#slider-2')
const displayRangeOne = $('#range1')
const displayRangeTwo = $('#range2')
const minGap = 10

const valueLabelOne = $('.values__label--one')
const valueLabelTwo = $('.values__label--two')

const rangeTrack = $('.range__track')
const sliderMaxValue = Number(slider1.attr('max'))

window.onload = function() {
  slide1(undefined)
  slide2()
}

function slide1(event: any) {
  let val1 = Number(slider1.val())
  let val2 = Number(slider2.val())

  if (val2 - val1 < minGap) {
    slider1.val(val2 - minGap)
  } else {
    displayRangeOne.text(val1)
    valueLabelOne.css('left', getPercentPosition(val1))
  }
  fillColor()
  console.log(event)
}

function slide2() {
  let val1 = Number(slider1.val())
  let val2 = Number(slider2.val())

  if (val2 - val1 < minGap) {
    slider2.val(val1 + minGap)
  } else {
    displayRangeTwo.text(val2)
    valueLabelTwo.css('left', getPercentPosition(val2))
  }
  fillColor()
}

slider1.on('input', (event) => {
  slide1(event)
})
slider2.on('input', slide2)

function getPercentPosition(elem: number) {
  return `${elem / sliderMaxValue * 100}%`
}

function fillColor() {
  const val1 = Number(slider1.val())
  const val2 = Number(slider2.val())
  const percent1 = getPercentPosition(val1)
  const percent2 = getPercentPosition(val2)
  rangeTrack.css('background', `linear-gradient(
    to right,
    #dadae5 ${percent1},
    #3264fe ${percent1},
    #3264fe ${percent2},
    #dadae5 ${percent2}`)
}
