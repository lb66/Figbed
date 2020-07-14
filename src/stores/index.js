import { createContext, useContext } from 'react'
import { authStore } from './auth'
import { userStore } from './user'

// window.stores = { authStore, userStore }

const context = createContext({ authStore, userStore })
// useContext读取context的值以及订阅context的变化
const useStores = () => useContext(context)
export { useStores }

