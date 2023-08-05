import { Switch, Route, Redirect } from "wouter"
import LoginPage from "../auth/login/page"
import HomePage from "../calendar/page"

export default function AppRouter () {
  const authStatus = 'authenticated'

  return (
    <Switch>
      {
        authStatus === 'not-authenticated'
        ? <Route path="/login" component={LoginPage} />
        : <Route path="/" component={HomePage} />
      }
      {
        authStatus === 'not-authenticated'
        ? <Redirect to="/login" />
        : <Redirect to="/" />
      }
    </Switch>
  )
}