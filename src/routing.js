import Home from 'pages/home/home'
import Type from 'pages/type/type'
import Forms from 'pages/forms/forms'
import Router from 'preact-router'
import {h, render} from 'preact'

const Routing = () => (
  <Router>
    <Home path='/' />
    <Type path='/type' />
    <Forms path='/forms'> </Forms>
  </Router>
)

export default Routing
