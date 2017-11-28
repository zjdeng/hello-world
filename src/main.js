import React from 'react'
import ReactDom from 'react-dom'

// 引入公共样式
// import './main.css'

// 引入React-Router模块
import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入组建
import Logo from './components/logo'
import inquiry from './components/Inquiry'
import healthCheck from './components/HealthCheck'


function nametest(user) {
  return user.names + ' ' + user.pwd;
}
const user = {
  names: 'zj',
  pwd: '333222'
}

class virBg extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <h1>
          hi, {nametest(user)}!
        </h1>
        <Link to="/inquiry">表格</Link>
        <Link to="/healthCheck">表格</Link>
        <div >
          {this.props.children}
        </div>
      </div>
    )
  }
}

const element = (
  /*<div>
    <Logo />
    <h1>
        hi, {nametest(user)}!
    </h1>
  </div>*/
  <Router history={hashHistory}>
    <Route path="/" component={virBg}>
      <Route path="/inquiry" component={inquiry} />
      <Route path="/healthCheck" component={healthCheck} />
    </Route>
  </Router>
)

ReactDom.render(
  element,
  document.getElementById('content')
);
