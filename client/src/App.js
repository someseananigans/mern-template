import {
  Route,
  Switch
} from 'react-router-dom'

import './App.css'
// import { } from './pages'


const App = () => {

  return (
    <div id="main">
      <Switch>
        <Route exact path='/' >
          {/* <Home /> */}
        </Route>
        {/* <Page404 /> */}
      </Switch>
    </div>
  )
}

export default App
