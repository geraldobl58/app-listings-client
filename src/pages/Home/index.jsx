/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import useApi from 'services/api'

import * as S from './styles'

const Home = () => {
  const api = useApi()

  const [stateList, setStateList] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates()
      setStateList(slist)
    }
    getStates()
  }, [api])

  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories()
      setCategories(cats)
    }
    getCategories()
  }, [api])

  return (
    <S.Container>
      <S.Content>
        <S.Search>
          <form method="GET" action="/ads">
            <input type="text" name="q" placeholder="O que você procura?" />
            <select name="state">
              {stateList.map((item) => (
                <option key={item._id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
            <button>Pesquisar</button>
          </form>
        </S.Search>
        <S.Categories>
          {categories.map((item) => (
            <Link to={`/ads?cat=${item.slug}`} key={item._id}>
              <img src={item.img} alt={item.name} />
              <strong>{item.name}</strong>
            </Link>
          ))}
        </S.Categories>
      </S.Content>
    </S.Container>
  )
}

export default Home
