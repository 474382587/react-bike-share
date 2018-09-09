import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Admin from './Admin'
import Buttons from './pages/ui/Button/Button'
import Login from './pages/login/Login'
import NotFound from './pages/notFound/NotFound'
import Modals from './pages/ui/Modals/Modals';
import Loading from './pages/ui/Loading/Loading';
import Notification from './pages/ui/Notification/Notification';
export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/admin"
            render={() => (
              <Admin>
                <Switch>
                  <Route path="/admin/ui/buttons" component={Buttons} />
                  <Route path="/admin/ui/modals" component={Modals} />
                  <Route path="/admin/ui/loadings" component={Loading} />
                  <Route path="/admin/ui/notification" component={Notification} />
                  <Route component={NotFound} />
                </Switch>
              </Admin>
            )}
          />
        </App>
      </HashRouter>
    )
  }
}
