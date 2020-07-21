import React from 'react'
import List from '../components/List'
import { useStores } from '../stores/index'

function History() {
  const { userStore } = useStores()
  return (
    <>
      <h1>历史</h1>
      {
        userStore.currentUser ? <List /> : null
      }
    </>
  )
}

export default History