import { Link } from 'react-router-dom'

import * as S from './styles'

import { isLogged, doLogout } from 'utils/AuthHandler'

const Header = () => {
  const logged = isLogged()

  const handleLogout = () => {
    doLogout()
    window.location.href = '/'
  }

  return (
    <S.Container>
      <S.Content>
        <S.Logo>
          <Link to="/">Logo</Link>
        </S.Logo>
        <S.Navigation>
          <ul>
            {logged && (
              <>
                <li>
                  <Link to="/my-account">Minha COnta</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Sair</button>
                </li>
                <li>
                  <Link to="/post-and-ad" className="button">
                    Poste seu anúncio
                  </Link>
                </li>
              </>
            )}
            {!logged && (
              <>
                <li>
                  <Link to="/signin">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Logout</Link>
                </li>
              </>
            )}
          </ul>
        </S.Navigation>
      </S.Content>
    </S.Container>
  )
}

export default Header
