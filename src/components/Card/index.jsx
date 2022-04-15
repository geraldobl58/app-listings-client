/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

import * as S from './styles'

const Card = (props) => {
  let price = ''

  if (props.data.priceNegotiable) {
    price = 'Preço Negociável'
  } else {
    price = `R$ ${props.data.price}`
  }

  return (
    <S.Container>
      <S.Content>
        <Link to={`/ad/${props.data.id}`}>
          <S.ContainerImage>
            <img src={props.data.image} alt={props.data.name} />
          </S.ContainerImage>
          <S.Price>{price}</S.Price>
          <S.Name>{props.data.title}</S.Name>
        </Link>
      </S.Content>
    </S.Container>
  )
}

export default Card
