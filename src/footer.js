export function footer() {
  const ano = new Date().getFullYear()

  return `
<footer class="border-t border-border">
  <div class="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
    <p>© ${ano} Fausto Ramos dos Santos</p>
    <p class="font-mono text-xs">feito com HTML + Tailwind + JavaScript</p>
  </div>
</footer>
`
}