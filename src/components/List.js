import React from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../stores'
import InfiniteScroll from 'react-infinite-scroller';
import { List, Spin, Avatar } from 'antd';


const Components = observer(() => {
  const { historyStore } = useStores()
  const loadMore = () => { historyStore.find() }
  return (
    <div>
      <InfiniteScroll
        initialLoad={true}
        pageStart={0}
        loadMore={loadMore}
        hasMore={!historyStore.isLoading && historyStore.hasMore}
        useWindow={true} >
        <List
          dataSource={historyStore.list}
          renderItem={item => (

            <List.Item key={item.id}>
              {/* <div>
                <img src={item.attributes.url.attributes.url} style={{ height: '80px' }} />
              </div>
              <div>
                <h5>{item.attributes.filename}</h5>
              </div>
              <div>
                <a href={item.attributes.url.attributes.url} target='_blank'>{item.attributes.url.attributes.url}</a>
              </div> */}
              <List.Item.Meta
                avatar={
                  <Avatar shape="square" size={64} src={item.attributes.url.attributes.url} />
                }
                title={item.attributes.filename}
                description={<a href={item.attributes.url.attributes.url} >{item.attributes.url.attributes.url}</a>}
              />
              <div>?</div>
            </List.Item>
          )}
        >
          {historyStore.isLoading && historyStore.hasMore && (
            <div>
              <Spin tip='加载中' />
            </div>
          )}
        </List>
      </InfiniteScroll>

    </div>
  )
})


export default Components