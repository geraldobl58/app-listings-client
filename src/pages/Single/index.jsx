/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Slide } from 'react-slideshow-image'

import useApi from 'services/api'

import { formattedDate } from 'utils/formattedDate'

import * as S from './styles'

const Single = () => {
  const api = useApi()

  const { id } = useParams()

  const [information, setInformation] = useState({})

  useEffect(() => {
    const getInformation = async (id) => {
      const json = await api.getAd(id, true)
      setInformation(json)
    }
    getInformation(id)
  }, [api, id])

  return (
    <S.Container>
      <S.Content>
        <S.LeftSidebar>
          <S.Image>
            {information.images && (
              <Slide>
                {information.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={index} />
                  </div>
                ))}
              </Slide>
            )}
          </S.Image>
          <S.Box>
            <S.Title>{information && information.title}</S.Title>
            <S.Date>{formattedDate(information.dateCreated)}</S.Date>
            <S.Descrition>Descrição: {information.description}</S.Descrition>
            <S.Views>Visualizações: {information.views}</S.Views>
          </S.Box>
        </S.LeftSidebar>
        <S.RightSidebar>
          <S.Price>
            {information.priceNegotiable && <h3>Preço Negociável</h3>}
            {!information.priceNegotiable && information.price && (
              <div>Preço: R$ {information.price}</div>
            )}
          </S.Price>
          <S.UserInfo>
            {information.userInfo && (
              <>
                <a
                  href={`mailto:${information.userInfo.email}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Fala com o vendedor
                </a>
                <strong>Dados do vendedor</strong>
                <strong>{information.userInfo.name}</strong>
                <strong>{information.userInfo.email}</strong>
                <strong>{information.stateName}</strong>
              </>
            )}
          </S.UserInfo>
        </S.RightSidebar>
      </S.Content>
    </S.Container>
  )
}

export default Single
