import { hero } from './hero.js'
import { header } from './header.js'
import { projetosSecao } from './projetos.js'
import { footer } from './footer.js'

document.querySelector('#app').innerHTML = `
${header('/')}
${hero()}
${projetosSecao()}
${footer()}
`

