import React from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import { Main } from './Main'
import { About } from './About'
import { Topic } from './Topic'

export default class Home extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Topic</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/main">Main</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact={true} component={Topic} />
            <Route path="/main" component={Main} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}
