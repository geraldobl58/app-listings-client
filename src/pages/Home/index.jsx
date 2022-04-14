/* eslint-disable no-unused-vars */
import { useState } from 'react'

import useApi from 'services/api'

import * as S from './styles'

const Home = () => {
  const api = useApi()

  return (
    <S.Container>
      <S.Content>
        <S.Search>
          <form method="GET" action="/ads">
            <input type="text" name="q" placeholder="O que você procura?" />
            <select>
              <option>Selecione</option>
            </select>
            <button>Pesquisar</button>
          </form>
        </S.Search>
        <S.Categories>Categories</S.Categories>
      </S.Content>
    </S.Container>
  )
}

export default Home
