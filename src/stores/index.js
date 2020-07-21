import { createContext, useContext } from 'react'
import { authStore } from './auth'
import { userStore } from './user'
import { imageStore } from './image'
import { historyStore } from './history'

window.stores = { authStore, userStore, imageStore, historyStore }

const context = createContext({ authStore, userStore, imageStore, historyStore })
// useContext读取context的值以及订阅context的变化
const useStores = () => useContext(context)
export { useStores }

