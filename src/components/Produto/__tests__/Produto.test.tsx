import { fireEvent, screen } from '@testing-library/react'
import Produto from '..'
import { renderizaComProvider } from '../../../utils/tests'

const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['Windows, PS5'],
  preco: 180.9,
  precoAntigo: 300.9,
  titulo: 'Hogwarts Legacy'
}

describe('Teste para o componente Produtop', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  })
  test('Deve adicionar um item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const Botao = screen.getByTestId('btn-adicionar-produto')
    fireEvent.click(Botao)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
