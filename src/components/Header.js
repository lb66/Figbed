import React from 'react'
import logo from './logo.svg'
import styled from 'styled-components'
import { NavLink, useHistory } from 'react-router-dom'
import { Button } from 'antd';
import { useStores } from '../stores'
import { observer } from 'mobx-react'


const StyleHeader = styled.header`
background-color:#303841;
display:flex;
align-items:center;
padding:10px 10px;
`
const StyleLogo = styled.img`
height:25px;
`
const StyleLink = styled(NavLink)`
color:#fff;
margin-left:4vw;
&.active{
  border-bottom:1px solid #fff;
}
`
const StyleDiv = styled.div`
  margin-left:auto;
  color:orange;
`
const StyleButton = styled(Button)`
  margin-left:10px;
`
const Header = observer(() => {
  const { userStore, authStore } = useStores()
  const history = useHistory()
  const handleLogout = () => {
    authStore.logout()
  }
  const handleLogin = () => {
    history.push('./login')
  }
  const handleRegister = () => {
    history.push('./register')
  }

  return (
    <StyleHeader>
      <StyleLogo src={logo} />
      <nav>
        <StyleLink to='/' activeClassName='active' exact>首页</StyleLink>
        <StyleLink to='/history' activeClassName='active'>上传历史</StyleLink>
        <StyleLink to='/about' activeClassName='active'>关于</StyleLink>
      </nav>
      <StyleDiv>
        {
          userStore.currentUser ? <>
            {userStore.currentUser.attributes.username} <StyleButton ghost onClick={handleLogout}>注销</StyleButton>
          </> : <>
              <StyleButton type="primary" onClick={handleLogin}>登录</StyleButton>
              <StyleButton type="primary" onClick={handleRegister}>注册</StyleButton>
            </>
        }
      </StyleDiv>
    </StyleHeader>
  )
})

export default Header