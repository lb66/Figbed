import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../stores'
import InfiniteScroll from 'react-infinite-scroller';
import { List, Spin, Avatar, Typography } from 'antd';


const Components = observer(() => {
  const { historyStore } = useStores()
  const { Text } = Typography;
  useEffect(() => {
    // console.log('加载')
    return () => {
      // console.log('卸载')
      historyStore.react()
    }
  }, [])
  const loadMore = () => { historyStore.find() }
  return (
    <InfiniteScroll
      initialLoad={true}
      pageStart={0}
      loadMore={loadMore}
      hasMore={!historyStore.isLoading && historyStore.hasMore}
      useWindow={true}
    >
      <List
        dataSource={historyStore.list}
        renderItem={item => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={
                <Avatar gap={100} shape="square" size={64} src={item.attributes.url.attributes.url} />
              }
              title={<a href={item.attributes.url.attributes.url} >{item.attributes.filename}</a>}
              description={<Text copyable={{ tooltips: ['复制', '复制成功!'] }}>{item.attributes.url.attributes.url}</Text>}
            />
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

  )
})


export default Components