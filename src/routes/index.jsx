import { Switch } from 'react-router-dom'

import RouteHandler from 'components/RouteHandler'

import Home from '../pages/Home'
import About from '../pages/About'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Single from '../pages/Single'
import Notfound from '../pages/Notfound'

export default function Routes() {
  return (
    <Switch>
      <RouteHandler exact path="/" component={Home} />
      <RouteHandler exact path="/about" component={About} />
      <RouteHandler exact path="/signin" component={SignIn} />
      <RouteHandler exact path="/signup" component={SignUp} />
      <RouteHandler exact path="/ad/:id" component={Single} />
      <RouteHandler private exact path="/post-and-ad">
        <About />
      </RouteHandler>
      <RouteHandler exact path="**" component={Notfound} />
    </Switch>
  )
}
