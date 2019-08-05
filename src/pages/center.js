import React, { Component } from 'react'
import './home.scss'
import { Button } from 'antd'
import router from 'umi/router';

class Center extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  onGoBackHome = () => {
    router.goBack()
    // router.push('/')
  }
  render() {
    return (
      <div className='center-container'>
        <p>这里是个人中心页面</p>
        <Button onClick={this.onGoBackHome}>返回主页</Button>
      </div>
    )
  }
}

export default Center