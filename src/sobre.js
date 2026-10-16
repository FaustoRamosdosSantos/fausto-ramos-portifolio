import { header } from './header.js'
import { footer } from './footer.js'

const habilidades = ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Git']

const tags = habilidades
  .map(
    (skill) => `
      <span class="rounded-full border border-border bg-card px-3 py-1 font-mono text-xs text-card-foreground">${skill}</span>`
  )
  .join('')

document.querySelector('#app').innerHTML = `
${header('sobre.html')}
<main>
  <section class="mx-auto max-w-5xl px-6 py-16 sm:py-24">
    <p class="font-mono text-sm text-primary">&lt;sobre-mim /&gt;</p>
    <h1 class="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Sobre mim</h1>

    <div class="mt-10 grid gap-10 md:grid-cols-[320px_1fr] md:items-start">

      <!-- placeholder da foto: troque por <img> depois -->
      <div class="flex aspect-square w-full items-center justify-center rounded-xl border border-border bg-muted font-mono text-xs text-muted-foreground">
        foto
      </div>

      <div class="space-y-5 text-base leading-relaxed text-muted-foreground">
        <p>Conte aqui como você começou a programar e o que te motivou a seguir em desenvolvimento web.</p>
        <p>Fale das tecnologias que você domina e das que está aprendendo agora.</p>
        <p>Diga o que você busca: a primeira oportunidade como júnior, os projetos que mais gosta de construir.</p>

        <div class="flex flex-wrap gap-2 pt-2">${tags}
        </div>
      </div>
    </div>
  </section>
</main>
${footer()}
`