import styled from 'styled-components'
import {Link} from 'preact-router/match'
import {h, render, Component} from 'preact'
import styleGuide from 'style.guide'

const MenuWrapper = styled.nav`
  width: 100%;
  min-width: 200px;
  max-width: 200px;
  padding: 18px 10px 0 10px;
  border-right: solid ${styleGuide.borderColor} 1px;
  transition: all 400ms cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 800px) { margin-left: ${props => props.margin}; }
`

const MenuItem = styled.div`
  a{
    display: block;
    padding: 2px 20px 2px 20px;
    font-size: 0.9em;
    border-radius: 30px;

    &:hover{
      text-decoration: none;
    }
  }

  a.menu--actived{
    color: #fff;
    background: ${styleGuide.primaryColor};
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
  left: 10px;
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
        </MenuItem>
      </MenuWrapper>
    )
  }
}

export {
  Menu,
  MenuButton
}
