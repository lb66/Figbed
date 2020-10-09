import React, { useRef } from 'react'
import { useStores } from '../stores'
import { observer, useLocalStore } from 'mobx-react'
import { Upload, message, Typography, Spin } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styled from 'styled-components'
// import { userStore } from '../stores/user';

const { Dragger } = Upload;
const { Text } = Typography;

const Border = styled.div`
margin-top:20px;
border:1px dashed #d9d9d9;
padding:20px;
background:#fafafa
`
const Image = styled.img`
max-width:250px;
`

const Component = observer(() => {
  const { imageStore } = useStores()
  const ref1 = useRef();
  const ref2 = useRef();
  const store = useLocalStore(() => ({
    width: null,
    height: null,
    setWidth(inputWidth) {
      store.width = inputWidth;
    },
    setHeight(inputHeight) {
      store.height = inputHeight;
    },
    get widthStr() {
      return store.width ? `/w/${store.width}` : '';
    },
    get heightStr() {
      return store.height ? `/h/${store.height}` : '';
    },
    get fullStr() {
      return imageStore.serverFile.attributes.url.attributes.url + '?imageView2/0' + store.widthStr + store.heightStr
    }
  }));
  const changeWidth = () => {
    store.setWidth(ref1.current.value);
  };
  const changeHeight = () => {
    store.setHeight(ref2.current.value);
  };

  const props = {
    beforeUpload: file => {
      // if (userStore.currentUser === null) {
      //   message.warning('请先登录再上传！');
      //   return false
      // }
      window.file = file
      // if (!/\.(gif|jpg|jpeg|png|svg)$/.test(file.name)) {
      //   message.error('只能上传图片！');
      //   return false
      // }
      if (file.size > 2048 * 2048) {
        message.error('上传图片不能大于2M！');
        return false
      }
      imageStore.setFile(file)
      imageStore.setFilename(file.name)
      imageStore.upload()
        .then((serverFile) => { console.log('上传成功', serverFile) })
        .catch((e) => { console.log('上传失败', e) })
      return false;
    },
    showUploadList: false //隐藏上传文件列表
  }

  return (
    <div>
      <Spin tip='上传中' spinning={imageStore.isUploading}>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击选择图片 / 将图片拖入此虚线框</p>
          <p className="ant-upload-hint">支持 JPG/PNG/BMP/GIF/SVG 格式</p>
        </Dragger>
      </Spin>
      <div>
        {/* 调试用window.stores.serverFile找url路径 */}
        {
          imageStore.serverFile ? <Border>
            <h2>{imageStore.filename}</h2>
            <dl>
              <dt>在线地址 : </dt>
              <dd>
                <Text copyable={{ tooltips: ['复制', '复制成功!'] }}>
                  {imageStore.serverFile.attributes.url.attributes.url}
                </Text>
              </dd>
              <dt>图片预览 : </dt>
              <dd>
                <a target='_blank' href={imageStore.serverFile.attributes.url.attributes.url} ><Image src={imageStore.serverFile.attributes.url.attributes.url} /></a>
              </dd>
              <dt>自定义尺寸 : </dt>
              <dd>
                <input ref={ref1} onChange={changeWidth} placeholder="最大宽度px（可选）" />
                <input ref={ref2} onChange={changeHeight} placeholder="最大高度px（可选）" />
              </dd>
              <dt>{store.height || store.width ? '点击查看自定义图片：' : null}</dt>
              <dd>
                {store.height || store.width ?
                  <a target="_blank" href={store.fullStr}>{store.fullStr} </a> : null}
              </dd>
            </dl>
          </Border> : null
        }
      </div>

    </div >
  )
})

export default Component

