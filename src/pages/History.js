import React from 'react'
import List from '../components/List'
import { useStores } from '../stores/index'

function History() {
  const { userStore } = useStores()
  return (
    <>
      {
        userStore.currentUser ? <List /> : null
      }
    </>
  )
}

export default History