import styled from 'styled-components'
import {Link} from 'preact-router/match'
import {h, render, Component} from 'preact'
import styleGuide from '../../style.guide'

const MenuWrapper = styled.nav`
  width: 100%;
  min-width: 200px;
  max-width: 200px;
  padding: 40px 10px 0 10px;
  transition: all 400ms cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 800px) {
    margin-left: ${props => props.margin};
  }
`

const MenuItem = styled.div`
  a{
    display: block;
    padding: 0 10px 0 10px;
    font-size: 0.9em;
    margin: 0 0 15px 0;
    transition: all 0.2s linear 0s;
  }

  a.menu--actived{
    border-left: solid ${styleGuide.primaryColor} 5px;
  }
`

const MenuButton = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 100px;
  align-self: center;
  cursor: pointer;
  background: ${styleGuide.primaryColor};
  position: absolute;
  top: 11px;
  left: 20px;
  display: none;
  justify-content: center;
  align-items: center;

  i{
    color: #fff;
    font-size: 20px;
  }

  @media (max-width: 800px) { display: flex; }
`

class Menu extends Component{

  state = {margin: '-200px'}

  toggleMenu = e => {
    this.state.margin === '-200px'
      ? this.setState({ margin: '0px' })
      : this.setState({ margin: '-200px' })
  }

  render({}, {margin}){
    return(
      <MenuWrapper margin={margin}>
        <MenuButton onClick={this.toggleMenu}>
          <i class="material-icons">menu</i>
        </MenuButton>

        <MenuItem>
          <Link activeClassName="menu--actived" href="/"> Home </Link>
          <Link activeClassName="menu--actived" href="/type"> Typography </Link>
          <Link activeClassName="menu--actived" href="/forms"> Forms </Link>
          <Link activeClassName="menu--actived" href="/colors"> Colors </Link>
          <Link activeClassName="menu--actived" href="/buttons"> Buttons </Link>
          <Link activeClassName="menu--actived" href="/tables"> Tables </Link>
          <Link activeClassName="menu--actived" href="/images"> Images </Link>
        </MenuItem>
      </MenuWrapper>
    )
  }
}

export {
  Menu,
  MenuButton
}
