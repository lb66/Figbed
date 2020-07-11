import { observable, action } from 'mobx'

class AuthStore {
  @observable isLogin = false
  @observable isLoading = false
  @observable values = {
    username: '',
    password: '',
  }

  @action setIsLogin(isLogin) {
    this.isLogin = isLogin
  }

  @action.setUsername(username) {
  this.values.username = username
}

@action.setPassward(password) {
  this.values.password = password
}

@action Login() {
  console.log('登录中')
  this.isLoading = true
  setTimeout(() => {
    console.log('登录成功')
    this.isLogin = true
    this.isLoading = false
  }, 1000)
}

@action Register() { }
console.log('注册中')
this.isLoading = true
setTimeout(() => {
  console.log('注册成功')
  this.isLogin = true
  this.isLoading = false
}, 1000)
@action Logout(){
  console.log('注销')
}
}
export AuthStore