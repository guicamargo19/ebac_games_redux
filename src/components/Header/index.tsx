import { useSelector } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { RootState } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Games</h1>
      <div>
        <img src={cesta} />
        <div>
          <span data-testid="qtde-carrinho">
            {itens.length} itens, valor total: {paraReal(valorTotal)}
          </span>
        </div>
      </div>
    </S.Header>
  )
}

export default Header
