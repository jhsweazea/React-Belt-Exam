import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from './views/Dashboard';
import Create from './views/Create';
import View from './views/View';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Dashboard/>
      </Route>
      <Route exact path="/new">
        <Create/>
      </Route>
      <Route exact path="/:_id">
        <View/>
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
