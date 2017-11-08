import styled from 'styled-components'
import {h} from 'preact'

const AlertElement = styled.div`
  font-size: 0.88em;
  line-height: 1.4em;
  padding: 10px;
  display: flex;
  border-radius: 3px;
  margin: 0 0 20px 0;
  color: #fff;

  i{
    margin: -4px 10px 0 0;
    align-self: center;
  }
`

const AlertInfo = AlertElement.extend`
  background-color: #2597e6;
`

const AlertError = AlertElement.extend`
  background-color: #db3844;
`

const AlertWarn = AlertElement.extend`
  background-color: #e68c34;
`

const AlertSuccess = AlertElement.extend`
  background-color: #1fb669;
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
