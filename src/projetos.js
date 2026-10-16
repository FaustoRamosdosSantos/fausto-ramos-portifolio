// Dados dos projetos: para adicionar um, é só copiar um bloco { ... }
const projetos = [
  {
    titulo: "Agência de Viagens",
    descricao:
      "Site de uma agência de viagens (Ponto Alto).",
    link: "#",
    repositorio: "#",
    tags: ["HTML", "Tailwind", "JavaScript"],
  },
  {
    titulo: "Memórias de Amor",
    descricao:
      "Aplicativo web (Mozões) que registra os momentos do casal, pensado como template para quem quiser usar com a namorada ou o namorado.",
    link: "#",
    repositorio: "#",
    tags: ["JavaScript", "Tailwind", "Web App"],
  },
  {
    titulo: "Aulas de Reforço",
    descricao:
      "Site institucional do Phi Ensino, com apresentação das aulas e contato.",
    link: "#",
    repositorio: "#",
    tags: ["HTML", "Tailwind", "JavaScript"],
  },
]

// Gera o HTML de UM card
function cardProjeto(projeto) {
  const tags = projeto.tags
    .map(
      (tag) => `
        <span class="rounded-full bg-secondary px-2 py-0.5 font-mono text-[11px] text-secondary-foreground">${tag}</span>`
    )
    .join('')

  return `
  <article class="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/40">

    <!-- placeholder da imagem: troque por <img src="..."> quando tiver a captura de tela -->
    <div class="flex aspect-[4/3] w-full items-center justify-center border-b border-border bg-muted font-mono text-xs text-muted-foreground">
      imagem do projeto
    </div>

    <div class="flex flex-1 flex-col gap-3 p-5">
      <div class="flex items-start justify-between gap-2">
        <h3 class="text-lg font-semibold text-card-foreground">${projeto.titulo}</h3>
        <div class="flex flex-wrap justify-end gap-1.5">${tags}
        </div>
      </div>

      <p class="flex-1 text-sm leading-relaxed text-muted-foreground">${projeto.descricao}</p>

      <div class="flex flex-col gap-2 pt-1">
        <a href="${projeto.link}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center justify-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
          Ver projeto
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 7h10v10" /><path d="M7 17 17 7" />
          </svg>
        </a>
        <a href="${projeto.repositorio}" target="_blank" rel="noopener noreferrer"
           class="inline-flex items-center justify-center gap-1.5 font-mono text-xs text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline">
          repositório
        </a>
      </div>
    </div>
  </article>
  `
}

// Função exportada: monta a seção inteira
export function projetosSecao() {
  const cards = projetos.map(cardProjeto).join('')

  return `
<section id="projetos" class="mx-auto max-w-5xl px-6 pb-24">
  <div class="mb-8 flex items-baseline justify-between gap-4">
    <h2 class="text-2xl font-semibold text-foreground sm:text-3xl">Projetos</h2>
    <p class="font-mono text-xs text-muted-foreground">// aplicações web que construí</p>
  </div>

  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    ${cards}
  </div>
</section>
`
}