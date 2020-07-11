import React from 'react'
import logo from './logo.svg'
import styled from 'styled-components'
import {
  NavLink
} from 'react-router-dom';

const StyleHeader = styled.header`
background-color:#02101f;
display:flex;
align-items:center;
justify-content:space-between;
padding:10px 10px;
color:#fff;
`
const StyleLogo = styled.img`
height:30px;
`
const StyleLink = styled(NavLink)`
color:#fff;
margin-right:20px;

&.active{
  border-bottom:1px solid #fff;
}
`
function Header() {
  return (
    <StyleHeader>
      <StyleLogo src={logo} />
      <nav>
        <StyleLink to='/' activeClassName='active' exact>首页</StyleLink>
        <StyleLink to='/history' activeClassName='active'>上传历史</StyleLink>
        <StyleLink to='/about' activeClassName='active'>关于</StyleLink>
      </nav>
    </StyleHeader>
  )
}

export default Header