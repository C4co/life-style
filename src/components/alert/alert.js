import styled from 'styled-components'
import {h} from 'preact'

const AlertElement = styled.div`
  font-size: 0.88em;
  line-height: 1.4em;
  padding: 10px;
  display: flex;
  border-radius: 3px;
  background: #1e2329;
  margin: 0 0 20px 0;

  i{
    margin: -4px 10px 0 0;
    align-self: center;
  }
`

const AlertInfo = AlertElement.extend`
  color: #57ace7;
`

const AlertError = AlertElement.extend`
  color: #dc6e77;
`

const AlertWarn = AlertElement.extend`
  color: #ecbc8d;
`

const AlertSuccess = AlertElement.extend`
  color: #7acaa2;
`

const Alert = ({children, ...props}) => {
  if (props.type === 'info' || !props.type) {
    return (<AlertInfo> <i class="material-icons">info_outline</i> { children } </AlertInfo>)
  }

  if (props.type === 'error') {
    return (<AlertError> <i class="material-icons">error_outline</i> { children } </AlertError>)
  }

  if (props.type === 'warn') {
    return (<AlertWarn> <i class="material-icons">warning</i> { children } </AlertWarn>)
  }

  if (props.type === 'success') {
    return (<AlertSuccess> <i class="material-icons">done</i> { children } </AlertSuccess>)
  }
}

export default Alert
