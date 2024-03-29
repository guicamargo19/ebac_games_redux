import styled from 'styled-components'
import { cores } from '../../styles'

export const Header = styled.header`
  background-image: linear-gradient(
    45deg,
    ${cores.corPrincipal},
    ${cores.corSecundaria}
  );
  margin-bottom: 30px;
  padding: 24px 24px;
  display: flex;
  align-items: center;

  h1 {
    font-size: 24px;
    flex: 1;
  }

  div {
    display: flex;
    align-items: center;
    img {
      width: 18px;
      margin-right: 8px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    div {
      margin-top: 16px;
    }
  }
`
