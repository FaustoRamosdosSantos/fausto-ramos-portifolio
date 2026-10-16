import { hero } from './hero.js'
import { header } from './header.js'


document.querySelector('#app').innerHTML = `
${header()}
${hero()}
`

