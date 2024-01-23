import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Produtos from '..'
import { renderizaComProvider } from '../../../utils/tests'
import { screen, waitFor } from '@testing-library/react'

const mocks = [
  {
    id: 1,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows'],
    preco: 150.9,
    precoAntigo: 199.9,
    titulo: 'Elden Ring'
  },
  {
    id: 2,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows, PS5', 'XBOX'],
    preco: 189.9,
    precoAntigo: 300.9,
    titulo: 'Avengers'
  },
  {
    id: 3,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows, XBOX, PS5'],
    preco: 190.9,
    precoAntigo: 249.9,
    titulo: 'FIFA'
  },
  {
    id: 4,
    categoria: 'RPG',
    imagem: '',
    plataformas: ['Windows, PS5, XBOX'],
    preco: 260.9,
    precoAntigo: 399.9,
    titulo: 'Homem-Aranha'
  }
]

const server = setupServer(
  rest.get(
    'http://localhost:4000/produtos',
    (requisicao, resposta, contexto) => {
      return resposta(contexto.json(mocks))
    }
  )
)

describe('Teste para o container Produtos', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers)
  afterAll(() => server.close())

  test('Deve renderizar corretamente com o texto de carregamento', () => {
    renderizaComProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('Deve renderizar corretamente com a listagem de jogos', async () => {
    const { debug } = renderizaComProvider(<Produtos />)
    await waitFor(
      () => (debug(), expect(screen.getByText('FIFA')).toBeInTheDocument())
    )
  })
})
