
import '@core/jqinit'
import '@styles/page.scss'

$('#app').dblSlider({value1: 20, tip: false})
$('#app1').dblSlider({min: -100, max:200, multirange: false})
let slider = $('#app2').dblSlider({min: 0, max: 100, value1: 20, value2: 50})

// $('#btn').on('click', () => slider.set({ value1: 30, value2: 140, step: 10, max: 200, multirange: false}))


$('#mr').on('change', () => {
  if ($('#mr').is(":checked")) {
    slider.set({multirange: true})
  } else {
    slider.set({multirange: false})
  }
})

