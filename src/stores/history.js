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
    Uploader.find({ page: this.page, limit: 10 })
      .then(newList => {
        this.append(newList)
        this.page++
        if (newList.length < 10) {
          this.hasMore = false
        }
      }).catch(error => {
        message.error('加载数据失败')
      }).finally(() => {
        this.isLoading = false
      })
  }

}

const historyStore = new HistoryStore()
export { historyStore }