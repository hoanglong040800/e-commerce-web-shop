import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home, About } from '../containers'

const MainRoute = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  )
}

export default MainRoute
