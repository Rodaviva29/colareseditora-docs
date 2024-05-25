import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Colares Editora & JJ</span>,
  project: {
    link: 'https://github.com/JoaoVitorFigueiredo/colareseditora',
  },
  docsRepositoryBase: 'https://github.com/Rodaviva29/colareseditora-docs',
  footer: {
    text: '© 2023-2024, Livraria J&J Books com uma parceria com Colares Sintra.',
  },
  feedback: {
    content: null,
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'JJ – %s',
    }
  },
  //search: {
    //placeholder: 'Pesquisar informações...'
    //emptyResult: 'Nenhum resultado encontrado.',
  //},
  editLink: {
    component: null,
  },
  banner: {
    key: '2.0-release',
    text: (
      <a href="https://github.com/JoaoVitorFigueiredo/colareseditora" target="_blank">
        🎉 Colares Editora 2.0 is released. Check repo →
      </a>
    )
  }
 //toc: {
 //  title: "Neste página",
 //},
}

export default config
