import { observable, action } from 'mobx';
import { message } from 'antd';
import { Uploader } from '../models';


class HistoryStore {
  @observable list = []
  @observable isLoading = false
  @observable hasMore = true
  @observable page = 0

  @action append(newList) {
    this.list = this.list.concat(newList)
  }
  @action find() {
    this.isLoading = true
    Uploader.find({ page: this.page, limit: 8 })
      .then(newList => {
        this.append(newList)
        this.page++
        if (newList.length < 8) {
          this.hasMore = false
        }
      }).catch(error => {
        message.error('加载数据失败')
      }).finally(() => {
        this.isLoading = false
      })
  }

  @action react() {
    this.list = []
    this.isLoading = false
    this.hasMore = true
    this.page = 0
  }
  @action reset() {
    this.list = []
    this.page = 0
  }

}

const historyStore = new HistoryStore()
export { historyStore }