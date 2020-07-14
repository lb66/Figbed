import { observable, action } from 'mobx';
import { Auth } from '../models'

class UserStore {
  @observable currentUser = null
  @action pullUser() {
    this.currentUser = Auth.getCurrentUser()
  }
  @action resetUser() {
    this.currentUser = null
  }

}
const userStore = new UserStore()
export { userStore }