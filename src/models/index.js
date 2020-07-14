import AV, { Query, User } from 'leancloud-storage'

AV.init({
  appId: "zJqDdcsxKpmWuNkGQObP66my-9Nh9j0Va",
  appKey: "1w1gfgPTbQFyaG87RV5V0hGI",
  serverURL: "https://zjqddcsx.lc-cn-e1-shared.com"
});
const Auth = {
  register(username, password) {
    let user = new User()
    user.setUsername(username)
    user.setPassword(password)
    return new Promise((resolve, reject) => {
      user.signUp().then(loginedUser => resolve(loginedUser), error => reject(error))
    })
  },
  login(username, password) {
    return new Promise((resolve, reject) => {
      User.logIn(username, password).then(loginedUser => resolve(loginedUser), error => reject(error))
    })
  },
  logout() {
    User.logOut()
  },
  getCurrentUser() {
    return User.current()
  }
}

export { Auth }