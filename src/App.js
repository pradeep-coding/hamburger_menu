import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="hamburger_menu/" component={Home} />
      <Route exact path="hamburger_menu/about" component={About} />
      <Route exact path="hamburger_menu/not-found" component={NotFound} />
      <Redirect to="hamburger_menu/not-found" />
    </Switch>
  </>
)
export default App
