import React from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../stores'

const Home = observer(() => {
  const { userStore } = useStores();
  return (
    <>
      <h1 style={{ color: 'red' }}>{
        userStore.currentUser ? <>
          Hello,{userStore.currentUser.attributes.username}</> : '请登录'
      }</h1>
    </>
  )
})

export default Home