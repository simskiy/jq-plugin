
import '@core/jqinit'
import '@styles/page.scss'

const slide1 = $('#app-1').dblSlider()
$('#slider-1-range').on('change', () => {
  if ($('#slider-1-range').is(':checked')) {
    slide1.set({multirange: true})
  } else {
    slide1.set({multirange: false})
  }
})

$('#slider-1-tip').on('change', () => {
  if ($('#slider-1-tip').is(':checked')) {
    slide1.set({tip: true})
  } else {
    slide1.set({tip: false})
  }
})

$('#slider-1-orientation').on('change', () => {
  if ($('#slider-1-orientation').is(':checked')) {
    slide1.set({orientation: 'horizontal'})
    $('.slider-1').removeClass('slider--vertical')
  } else {
    slide1.set({orientation: 'vertical'})
    $('.slider-1').addClass('slider--vertical')
  }
})

$('#slider-1-min').on('change', () => {
  let value = Number($('#slider-1-min').val())
  slide1.set({min: +value })
})

$('#slider-1-max').on('change', () => {
  let value = Number($('#slider-1-max').val())
  slide1.set({max: value})
})

$('#slider-1-from').on('change', () => {
  let value = Number($('#slider-1-from').val())
  slide1.set({value1: value})
})

$('#slider-1-to').on('change', () => {
  let value = Number($('#slider-1-to').val())
  slide1.set({value2: value})
})

$('#slider-1-step').on('change', () => {
  let value = Number($('#slider-1-step').val())
  slide1.set({step: value})
})
