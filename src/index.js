import "core-js/stable"
import "regenerator-runtime/runtime"

import './styles/main.scss'


console.log("working!!!")

async function start() {
	return await Promise.resolve('async working')
}

start().then(console.log)
