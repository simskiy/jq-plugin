
import '@core/jqinit'
import '@styles/page.scss'

const slide1 = $('#app-1').dblSlider()

$('.slider-1').on('change', (event) => {
  switch(event.target.id) {

    case 'slider-1-tip': {
      if ($('#slider-1-tip').is(':checked')) {
        slide1.set({tip: true})
      } else {
        slide1.set({tip: false})
      }
    } break;

    case 'slider-1-range': {
      if ($('#slider-1-range').is(':checked')) {
        slide1.set({multirange: true})
      } else {
        slide1.set({multirange: false})
      }
    } break;

    case 'slider-1-orientation': {
      if ($('#slider-1-orientation').is(':checked')) {
        slide1.set({orientation: 'horizontal'})
        $('.slider-1').removeClass('slider--vertical')
      } else {
        slide1.set({orientation: 'vertical'})
        $('.slider-1').addClass('slider--vertical')
      }
    } break;

    case 'slider-1-min': {
      slide1.set({min: Number($('#slider-1-min').val())})
    } break;

    case 'slider-1-max': {
      slide1.set({max: Number($('#slider-1-max').val())})
    } break;

    case 'slider-1-from': {
      slide1.set({value1: Number($('#slider-1-from').val())})
    } break;

    case 'slider-1-to': {
      slide1.set({value2: Number($('#slider-1-to').val())})
    } break;

    case 'slider-1-step': {
      slide1.set({step: Number($('#slider-1-step').val())})
    } break;

    default: 'Какая-то ошибка'
  }

})
