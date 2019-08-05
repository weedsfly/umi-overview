import React, { Component } from 'react'
import { Layout } from 'antd'
const { Header, Content, Footer } = Layout
import '../assets/css/style.scss'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import appStore from '../reducers'

const store = createStore(appStore)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Provider store={store}>
        <div className='app-container'>
          <Header>header</Header>
          <Content>{this.props.children}</Content>
          <Footer>footer</Footer>
        </div>
      </Provider>
    )
  }
}

export default App
