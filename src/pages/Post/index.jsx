/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from 'react'

import MaskedInput from 'react-text-mask'

import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import Error from 'components/Error'

import useApi from 'services/api'

import * as S from './styles'

const Post = () => {
  const api = useApi()

  const fileField = useRef()

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [priceNegotiable, setPriceNegotiable] = useState(false)
  const [description, setDescription] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState('')

  const [categories, setCategories] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDisabled(true)
    setError('')

    // const json = await api.login(email, password)

    // if (json.error) {
    //   setError(json.error)
    // } else {
    //   doLogin(json.token, rememberPassword)
    //   window.location.href = '/'
    // }

    setDisabled(false)
  }

  useEffect(() => {
    const getCategories = async () => {
      const cats = await api.getCategories()
      setCategories(cats)
    }
    getCategories()
  }, [api])

  const priceMask = createNumberMask({
    prefix: 'R$ ',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ','
  })

  return (
    <S.Container>
      {error && <Error>{error}</Error>}
      <S.Content>
        <form onSubmit={handleSubmit}>
          <S.Title>E-mail</S.Title>
          <input
            required
            type="text"
            disabled={disabled}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <S.Title>Categoris</S.Title>
          <select
            require
            disabled={disabled}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories &&
              categories.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
          </select>
          <S.Title>Preço</S.Title>
          <MaskedInput
            className="input"
            mask={priceMask}
            placeholder="R$ "
            disabled={disabled || priceNegotiable}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <S.Title>Preço Negociável</S.Title>
          <input
            type="checkbox"
            disabled={disabled}
            checkbox={priceNegotiable}
            onChange={() => setPriceNegotiable(!priceNegotiable)}
          />
          <S.Title>Descrição</S.Title>
          <textarea
            disabled={disabled}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <S.Title>Imagens</S.Title>
          <input
            multiple
            type="file"
            disabled={disabled}
            ref={fileField}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button disabled={disabled}>Cadatsrar Anúncio</button>
        </form>
      </S.Content>
    </S.Container>
  )
}

export default Post
