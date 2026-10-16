# Portfólio — Fausto Ramos

Portfólio pessoal de Fausto Ramos, desenvolvedor web júnior. Site de três páginas (Início, Sobre mim e Contato) feito com **HTML, Tailwind CSS e JavaScript puro**, sem frameworks.

🔗 **Site no ar:** https://faustoramosdossantos.github.io/fausto-ramos-portifolio/

> 🚧 Em construção: textos, links e imagens dos projetos ainda são placeholders.

## Páginas

| Página | Arquivo | Conteúdo |
|---|---|---|
| Início | `index.html` | Hero de apresentação e seção de projetos |
| Sobre mim | `sobre.html` | Apresentação, foto e habilidades |
| Contato | `contato.html` | Cartões de e-mail, GitHub e LinkedIn |

## Tecnologias

- **HTML** e **JavaScript (ES Modules)**: cada parte da página é uma função que devolve HTML.
- **[Tailwind CSS v4](https://tailwindcss.com/)** pelo CDN (`@tailwindcss/browser`), com um tema próprio (escuro, azul-noite com acento âmbar).
- **[Vite](https://vite.dev/)** para o servidor de desenvolvimento e o build.
- Fontes: Space Grotesk e JetBrains Mono.

## Como o projeto funciona

Cada página `.html` carrega o seu script, que monta a tela dentro de `<div id="app">`:

```
index.html   →  src/main.js    →  header + hero + projetos + footer
sobre.html   →  src/sobre.js   →  header + conteúdo + footer
contato.html →  src/contato.js →  header + conteúdo + footer
```

Os blocos reutilizáveis ficam em `src/`:

| Arquivo | Função |
|---|---|
| `header.js` | Barra de navegação. Recebe o caminho da página atual e destaca o link ativo |
| `hero.js` | Seção de apresentação da home |
| `projetos.js` | Seção de projetos. Os cards são gerados a partir de uma lista de dados |
| `footer.js` | Rodapé, com o ano atualizado automaticamente |

### Adicionar um projeto

Em `src/projetos.js`, copie um bloco da lista `projetos` e edite os campos:

```js
{
  titulo: "Nome do projeto",
  descricao: "Descrição curta.",
  link: "https://...",
  repositorio: "https://github.com/...",
  tags: ["HTML", "Tailwind", "JavaScript"],
}
```

O card aparece sozinho na página.

### Tema

As cores e as fontes ficam no bloco `<style type="text/tailwindcss">` dentro do `<head>` de cada `.html`. Para mudar uma cor, edite o valor em `:root` e repita a alteração nos três arquivos.

## Rodando localmente

Requer [Node.js](https://nodejs.org/).

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

## Build

```bash
npm run build     # gera a pasta dist/
npm run preview   # serve a dist/ localmente para conferir o resultado final
```

- O `vite.config.js` lista as três páginas; uma página nova precisa ser adicionada ali para entrar no build.
- Abra a versão final com `npm run preview`. Abrir o `dist/index.html` com duplo clique não funciona, porque os caminhos e os módulos exigem um servidor.
- A pasta `dist/` é gerada a cada build e não vai para o repositório.

## Publicação (GitHub Pages)

O site é publicado automaticamente pelo **GitHub Actions**: a cada `git push` na branch `main`, o workflow `.github/workflows/deploy.yml` roda `npm run build` e publica a pasta `dist/`.

Pontos que fazem isso funcionar (e que quebram o site se esquecidos):

- **Fonte do Pages:** em *Settings → Pages → Source*, deve estar **GitHub Actions** (e não "Deploy from a branch"), senão o GitHub publica os arquivos-fonte em vez do build.
- **`base` no `vite.config.js`:** o site mora em `/fausto-ramos-portifolio/`, então o Vite precisa saber o nome do repositório. Se o repositório for renomeado, esse valor muda junto.
- **Links relativos nos `.js`:** o `base` corrige os caminhos dos arquivos HTML, mas não os links escritos dentro dos templates JavaScript. Por isso os links usam `sobre.html` e `./`, e nunca `/sobre.html`, que apontaria para fora do site.
- **`package-lock.json`:** precisa estar no repositório, porque o workflow usa `npm ci`.

Para republicar sem mudar código, use *Actions → Publicar no GitHub Pages → Run workflow*.

## Próximos passos

- [ ] Preencher os textos de `sobre.js` e os links de `contato.js`
- [ ] Publicar os três projetos de destaque e atualizar seus links
- [ ] Trocar os placeholders de imagem por capturas de tela
- [ ] Adicionar `description` e tags Open Graph ao `index.html`
