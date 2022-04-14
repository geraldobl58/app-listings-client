import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  )
}
