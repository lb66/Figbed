import React from 'react'
import { Alert, Divider } from 'antd';
function About() {
  return (
    <>
      <h1>关于Figbed图床</h1>
      <Divider />
      <Alert
        message="Figbed免费图床仅供分享图片使用，我们保留随时删除图片并举报上传违规图片者的权利"
        description=' '
        type="success"
        showIcon
      />
      <br />

      <Alert
        message='严禁上传及分享如下类型的图片：'
        type="error"
        description='含有色情、暴力、宣扬恐怖主义的图片；
        侵犯版权、未经授权的图片；
        其他违反中华人民共和国法律的图片；
        其他违反香港法律的图片'
        showIcon
      />
      <br />
      <Alert message="*✧⁺˚⁺ପ(๑･ω･)੭ु⁾⁾ 好好学习天天向上 " type="info" description=' ' showIcon />
    </>
  )
}

export default About