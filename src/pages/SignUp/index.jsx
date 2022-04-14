/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

import Error from 'components/Error'

import useApi from 'services/api'

import { doLogin } from 'utils/AuthHandler'

import * as S from './styles'

const SignUp = () => {
  const api = useApi()

  const [name, setName] = useState('')
  const [stateLocation, setStateLocation] = useState('')

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState('')

  const [stateList, setStateList] = useState([])

  useEffect(() => {
    const getStates = async () => {
      const slist = await api.getStates()
      setStateList(slist)
    }
    getStates()
  }, [api])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDisabled(true)
    setError('')

    if (password !== confirmPassword) {
      setError('Whoops: As senhas estão diferente, tente novamente!')
      setDisabled(false)
      return
    }

    const json = await api.register(name, email, password, stateLocation)

    if (json.error) {
      setError(json.error)
    } else {
      doLogin(json.token)
      window.location.href = '/'
    }

    setDisabled(false)
  }

  return (
    <S.Container>
      {error && <Error>{error}</Error>}
      <S.Content>
        <form onSubmit={handleSubmit}>
          <S.Title>Nome Completo</S.Title>
          <input
            required
            type="text"
            disabled={disabled}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <S.Title>Estado</S.Title>
          <select
            value={stateLocation}
            onChange={(e) => setStateLocation(e.target.value)}
          >
            <option>Selecione um estado</option>
            {stateList.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
          <S.Title>E-mail</S.Title>
          <input
            required
            type="email"
            disabled={disabled}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Title>Senha</S.Title>
          <input
            required
            type="password"
            disabled={disabled}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.Title>Confirmar Senha</S.Title>
          <input
            required
            type="password"
            disabled={disabled}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button disabled={disabled}>Realizar Cadastro</button>
        </form>
      </S.Content>
    </S.Container>
  )
}

export default SignUp
