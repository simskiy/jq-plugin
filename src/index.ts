import 'core-js/stable'
import 'regenerator-runtime/runtime'

import './styles/main.scss'


// eslint-disable-next-line quotes
console.log("it's working!!!")

async function start() {
  return await Promise.resolve('async working')
}

start().then(console.log)
