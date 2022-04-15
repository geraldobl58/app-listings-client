/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import MaskedInput from 'react-text-mask'

import createNumberMask from 'text-mask-addons/dist/createNumberMask'

import Error from 'components/Error'

import useApi from 'services/api'

import * as S from './styles'

const Post = () => {
  const api = useApi()

  const fileField = useRef()

  const history = useHistory()

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

    const errors = []

    if (!title.trim()) {
      errors.push('Whoops: Sem título')
    }

    if (!category.trim()) {
      errors.push('Whoops: Sem categoria')
    }

    if (errors.length === 0) {
      const formData = new FormData()

      formData.append('title', title)
      formData.append('price', price)
      formData.append('priceneg', priceNegotiable)
      formData.append('desc', description)
      formData.append('cat', category)

      if (fileField.current.files.length > 0) {
        for (let i = 0; i < fileField.current.files.length; i++) {
          formData.append('img', fileField.current.files[i])
        }
      }

      const json = await api.addAd(formData)

      if (!json.error) {
        history.push(`/ad/${json.id}`)
        return
      } else {
        setError(json.error)
      }
    } else {
      setError(errors.join('\n'))
    }

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
          <S.Title>Titulo</S.Title>
          <input
            required
            type="text"
            disabled={disabled}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <S.Title>Categoris</S.Title>
          <select
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
          <S.Title>Imagens (Você pode enviar mais de 1 imagem)</S.Title>
          <input multiple type="file" disabled={disabled} ref={fileField} />
          <button disabled={disabled}>Cadatsrar Anúncio</button>
        </form>
      </S.Content>
    </S.Container>
  )
}

export default Post
