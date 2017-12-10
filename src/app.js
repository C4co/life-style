import 'style'
import {render} from 'preact'
import Routing from 'routing'
import 'preact/debug'
import {registerServiceWorker} from '../config/app.config'

registerServiceWorker()

render(<Routing />, document.body)
