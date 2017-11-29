import React from 'react'
import ReactDom, {render} from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// 引入公共样式
// import './main.css'

// 引入React-Router模块
// import { Router, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'

// 引入组建
// import Logo from './components/logo'
import inquiry from './components/Inquiry'
import healthCheck from './components/HealthCheck'
// <Logo />

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
        <h1>
          hi, {nametest(user)}!
        </h1>
        <Link to="/inquiry">问诊</Link>
        <Link to="/healthCheck">体检</Link>
        <div>
          {this.props.component}
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
  <BrowserRouter>
    <Route path="/" component={virBg}>
      <Route path="inquiry" component={inquiry} />
      <Route path="healthCheck" component={healthCheck} />
    </Route>
  </BrowserRouter>
)

render(
  element,
  document.getElementById('content')
);
