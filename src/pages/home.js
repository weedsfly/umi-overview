import React, { Component } from 'react'
import './home.scss'
import Link from 'umi/link'
import { connect } from 'react-redux'
import { Button, Table } from 'antd';
import { getList } from '../actions'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    this.props.onGetList()
  }
  onButtonClick = () => {
    const { onToggleDesc, isShowDesc } = this.props
    onToggleDesc(!isShowDesc)
  }
  render() {
    const { isShowDesc, listData } = this.props
    const columns = [{
      title: '姓名',
      dataIndex: 'name'
    }, {
      title: '城市',
      dataIndex: 'city'
    }, {
      title: '性别',
      dataIndex: 'sex',
      render: (text, record) => (text === 0 ? '男' : '女')
    }, {
      title: '邮箱',
      dataIndex: 'email'
    }]
    return (
      <div className='home-container'>
        <p className='red'>Home 页面</p>
        <Link to='/center'>个人中心</Link>
        <Button onClick={this.onButtonClick}>显示/隐藏</Button>
        {
          isShowDesc ?
            <p>这里是详情信息</p> : ''
        }
        <Table dataSource={listData} columns={columns} rowKey='name'/>
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
  },
  onGetList: () => {
    getList({dispatch})
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)