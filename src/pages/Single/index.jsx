/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
          <S.Image>Image</S.Image>
          <S.Title>{information && information.title}</S.Title>
          <S.Date>{formattedDate(information.dateCreated)}</S.Date>
          <S.Descrition>Descrição: {information.description}</S.Descrition>
          <S.Views>Visualizações: {information.views}</S.Views>
        </S.LeftSidebar>
        <S.RightSidebar>Right</S.RightSidebar>
      </S.Content>
    </S.Container>
  )
}

export default Single
