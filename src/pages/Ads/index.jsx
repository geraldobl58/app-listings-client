/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import Card from 'components/Card'

import useApi from 'services/api'

import * as S from './styles'

let timer

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

  const [adsTotal, setAdsTotal] = useState(0)
  const [pageCount, setPageCount] = useState(0)

  const [q, setQ] = useState(querySearch)
  const [cat, setCat] = useState(queryCat)
  const [state, setState] = useState(queryState)

  const [stateList, setStateList] = useState([])
  const [categories, setCategories] = useState([])
  const [adList, setAdList] = useState([])

  const [loading, setLoading] = useState(true)

  const [resultOpcity, setResultOpcity] = useState(1)

  const [currentPage, setCurrentPage] = useState(1)

  const getAdsList = async () => {
    setLoading(true)

    let offset = (currentPage - 1) * 2

    const json = await api.getAds({
      sort: 'desc',
      limit: 9,
      q,
      cat,
      state,
      offset
    })
    setLoading(false)
    setAdList(json.ads)
    setResultOpcity(1)
    setAdsTotal(json.total)
  }

  useEffect(() => {
    if (adList.length > 0) {
      setPageCount(Math.ceil(adsTotal / adList.length))
    } else {
      setPageCount(0)
    }
  }, [adsTotal])

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

    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(getAdsList, 2000)
    setResultOpcity(0.3)
    setCurrentPage(1)
  }, [q, cat, state, history])

  let pagination = []

  for (let i = 1; i <= pageCount; i++) {
    pagination.push(i)
  }

  useEffect(() => {
    setResultOpcity(0.3)
    getAdsList()
  }, [currentPage])

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
          </form>
        </S.LeftSidebar>
        <S.RightSidebar>
          <S.TitleCard>Resultado</S.TitleCard>
          {loading && adList.length === 0 && (
            <S.ListLoading>Carregando...</S.ListLoading>
          )}
          {!loading && adList.length === 0 && (
            <S.ListLoading>
              Nenhum resultado encontrado, tente novamnete!
            </S.ListLoading>
          )}
          <S.CardContent style={{ opacity: resultOpcity }}>
            {adList.map((item, index) => (
              <Card key={index} data={item} className="card" />
            ))}
          </S.CardContent>
          <S.Pagination>
            {pagination.map((item, index) => (
              <S.PaginationContent
                key={index}
                className={
                  item === currentPage ? 'pageItem active' : 'pageItem'
                }
                onClick={() => setCurrentPage(item)}
              >
                {item}
              </S.PaginationContent>
            ))}
          </S.Pagination>
        </S.RightSidebar>
      </S.Content>
    </S.Container>
  )
}

export default Ads
