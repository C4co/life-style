import Home from 'pages/home/home'
import Router from 'preact-router'
import { createHashHistory } from 'history'
import {h, render} from 'preact'

const Routing = () => (
  <Router history={createHashHistory()} >
    <Home path='/' />
  </Router>
)

export default Routing
