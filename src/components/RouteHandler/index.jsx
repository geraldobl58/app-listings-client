/* eslint-disable react/prop-types */
import { Redirect, Route } from 'react-router-dom'

import { isLogged } from 'utils/AuthHandler'

const RouteHandler = ({ children, ...rest }) => {
  const logged = isLogged()
  const authorized = rest.private && !logged ? false : true

  return (
    <Route
      {...rest}
      render={() => (authorized ? children : <Redirect to="/signin" />)}
    />
  )
}

export default RouteHandler
