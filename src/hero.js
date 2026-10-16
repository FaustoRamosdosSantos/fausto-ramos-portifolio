export function hero() {
  return `
<section class="relative overflow-hidden">
  <!-- grade quadriculada de fundo -->
  <div class="hero-grid pointer-events-none absolute inset-0" aria-hidden="true"></div>

  <div class="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:py-32">
    <p class="font-mono text-sm text-primary">&lt;olá, mundo /&gt;</p>

    <h1 class="mt-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
      Portfólio
      <span class="block text-primary">Fausto Ramos</span>
    </h1>

    <p class="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
      Desenvolvedor web júnior apaixonado por construir interfaces e
      aprender algo novo a cada projeto. Abaixo estão algumas das
      aplicações que desenvolvi.
    </p>

    <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
      <a href="#projetos"
         class="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
        Ver projetos
        <!-- seta (lucide arrow-right) -->
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
      </a>
      <a href="/contato.html"
         class="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-card-foreground transition-colors hover:border-primary/40">
        Entrar em contato
      </a>
    </div>
  </div>
</section>
`
}