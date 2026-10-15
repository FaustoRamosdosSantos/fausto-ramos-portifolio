


document.querySelector('#app').innerHTML = `
<header class="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
  <nav class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">

    <a href="#inicio"
       class="flex items-center gap-2 font-mono text-sm font-medium text-foreground transition-colors hover:text-primary">
      <!-- ícone de terminal (>_) -->
      <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" x2="20" y1="19" y2="19" />
      </svg>
      <span>fausto.dev</span>
    </a>

    <ul class="flex items-center gap-1">
      <li><a href="#inicio"    class="rounded-md px-3 py-2 text-sm text-primary transition-colors">Início</a></li>
      <li><a href="#sobre-mim" class="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">Sobre mim</a></li>
      <li><a href="#contato"   class="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">Contato</a></li>
    </ul>

  </nav>
</header>
<section class="bg-background text-foreground p-10">
  <div>
    <h1 style="text-align: center; font-size: 5rem;">Portfólio <br> Fausto Ramos <br> Em Criação</h1>
  </div>
</section>
`

