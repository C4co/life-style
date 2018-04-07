import './style'
import {h, render} from 'preact'
import Routing from './routing'
import 'preact/debug'

//Necessary to fix parceljs live-reload.

document.body.innerHTML = ''
render(<Routing></Routing>, document.body)
