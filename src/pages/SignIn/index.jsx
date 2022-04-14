/* eslint-disable no-unused-vars */
import Error from 'components/Error'
import { useState } from 'react'

import useApi from 'services/api'
import { doLogin } from 'utils/AuthHandler'

import * as S from './styles'

const SignIn = () => {
  const api = useApi()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberPassword, setRememberPassword] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDisabled(true)

    const json = await api.login(email, password)

    if (json.error) {
      setError(json.error)
    } else {
      doLogin(json.token, rememberPassword)
      window.location.href = '/'
    }
  }

  return (
    <S.Container>
      {error && <Error>{error}</Error>}
      <S.Content>
        <form onSubmit={handleSubmit}>
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
          <input
            type="checkbox"
            disabled={disabled}
            checked={rememberPassword}
            onChange={(e) => setRememberPassword(e.target.value)}
          />{' '}
          Lembrar na próxima
          <button disabled={disabled}>Entrar</button>
        </form>
      </S.Content>
    </S.Container>
  )
}

export default SignIn
