const links = [
  { href: './', texto: 'Início' },
  { href: 'sobre.html', texto: 'Sobre mim' },
  { href: 'contato.html', texto: 'Contato' },
]

export function header(caminhoAtual) {
  const itens = links
    .map((link) => {
      const ativo = link.href === caminhoAtual
      const cor = ativo
        ? 'text-primary'
        : 'text-muted-foreground hover:text-foreground'
      // se já está nessa página, o clique só sobe suavemente ao topo
      const destino = ativo ? '#' : link.href

      return `
      <li>
        <a href="${destino}"
           class="rounded-md px-3 py-2 text-sm transition-colors ${cor}">${link.texto}</a>
      </li>`
    })
    .join('')

  return `
<header class="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
  <nav class="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">

    <div class="flex items-center gap-2 font-mono text-sm font-medium text-foreground">
      <svg class="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 17 10 11 4 5" />
        <line x1="12" x2="20" y1="19" y2="19" />
      </svg>
      <span>fausto.dev</span>
    </div>

    <ul class="flex items-center gap-1">${itens}
    </ul>

  </nav>
</header>
`
}