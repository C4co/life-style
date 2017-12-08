import {h, render} from 'preact'

import Home from 'pages/home/home'
import Type from 'pages/type/type'
import Forms from 'pages/forms/forms'
import Colors from 'pages/colors/colors'
import Buttons from 'pages/buttons/buttons'
import Tables from 'pages/tables/tables'
import Images from 'pages/images/images'

import Router from 'preact-router'

const Routing = () => (
  <Router>
    <Home path='/' />
    <Type path='/type' />
    <Forms path='/forms' />
    <Colors path='/colors' />
    <Buttons path='/buttons' />
    <Tables path='/tables' />
    <Images path='/images' />
  </Router>
)

export default Routing
