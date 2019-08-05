import React, { Component } from 'react'
import './home.scss'
import Link from 'umi/link'
import { connect } from 'react-redux'
import { Button } from 'antd';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  onButtonClick = () => {
    const { onToggleDesc, isShowDesc } = this.props
    onToggleDesc(!isShowDesc)
  }
  render() {
    const { isShowDesc } = this.props
    return (
      <div className='home-container'>
        <p className='red'>Home 页面</p>
        <Link to='/center'>个人中心</Link>
        <Button onClick={this.onButtonClick}>显示/隐藏</Button>
        {
          isShowDesc ?
            <p>这里是详情信息</p> : ''
        }
      </div>
    )
  }
}

// mapStateToProps 方法传的state是全局的store，我们只需要homeStore，返回homeStore
const mapStateToProps = state => {
  console.log('state:', state)
  return state.homeStore
}

const mapDispatchToProps = dispatch => ({
  onToggleDesc: (value) => {
    dispatch({
      type: 'home-show-desc',
      value
    })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)