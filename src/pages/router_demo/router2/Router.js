import React from 'react'
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import {Main} from './Main'
import Home from './Home'
import {Topic} from './Topic'
import {About} from './About'

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
          <Home>
            <Route path="/" exact={true} component={Topic} />
            <Route path="/main" component={Main} />
            <Route path="/about" component={About} />
          </Home>
      </Router>
    )
  }
}

// ;<ul>
//   <li>
//     <Link to="/">Topic</Link>
//   </li>
//   <li>
//     <Link to="/about">About</Link>
//   </li>
//   <li>
//     <Link to="/main">Main</Link>
//   </li>
// </ul>
