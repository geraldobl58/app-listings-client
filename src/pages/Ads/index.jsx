/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import Card from 'components/Card'

import useApi from 'services/api'

import * as S from './styles'

const Ads = () => {
  const api = useApi()

  const history = useHistory()

  const useQueryString = () => {
    return new URLSearchParams(useLocation().search)
  }

  const query = useQueryString()

  const querySearch = query.get('q') != null ? query.get('q') : ''
  const queryCat = query.get('cat') != null ? query.get('cat') : ''
  const queryState = query.get('state') != null ? query.get('state') : ''

  const [q, setQ] = useState(querySearch)
  const [cat, setCat] = useState(queryCat)
  const [state, setState] = useState(queryState)

  const [stateList, setStateList] = useState([])
  const [categories, setCategories] = useState([])
  const [adList, setAdList] = useState([])

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

  useEffect(() => {
    const getRecents = async () => {
      const json = await api.getAds({
        sort: 'desc',
        limit: 9
      })

      setAdList(json.ads)
    }
    getRecents()
  }, [api])

  useEffect(() => {
    const queryString = []

    if (q) {
      queryString.push(`q=${q}`)
    }

    if (cat) {
      queryString.push(`cat=${cat}`)
    }

    if (state) {
      queryString.push(`state=${state}`)
    }

    history.replace({
      search: `?${queryString.join('&')}`
    })
  }, [q, cat, state, history])

  return (
    <S.Container>
      <S.Content>
        <S.LeftSidebar>
          <form>
            <input
              type="text"
              name="q"
              placeholder="O que você procura?"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <S.Title>Estado</S.Title>
            <select value={state} onChange={(e) => setState(e.target.value)}>
              {stateList.map((item, index) => (
                <option key={index} value={item._name}>
                  {item.name}
                </option>
              ))}
            </select>
            <S.Title>Categoria</S.Title>
            <S.ListCategories>
              <ul>
                {categories.map((item, index) => (
                  <li
                    key={index}
                    className={
                      cat == item.slug ? 'categoryItem active' : 'categoryItem'
                    }
                    onClick={(e) => setCat(item.slug)}
                  >
                    <img src={item.img} alt={index} />
                    <strong>{item.name}</strong>
                  </li>
                ))}
              </ul>
            </S.ListCategories>
            <button>Entrar</button>
          </form>
        </S.LeftSidebar>
        <S.RightSidebar>Right</S.RightSidebar>
      </S.Content>
    </S.Container>
  )
}

export default Ads
