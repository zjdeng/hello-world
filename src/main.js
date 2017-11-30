import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, BrowserRouter, Router, Route, Link, Switch } from 'react-router-dom'

// 引入组建
import Logo from './components/logo'
import inquiry from './components/Inquiry'
import healthCheck from './components/HealthCheck'

// 引入公共样式
// import './main.css'

function nametest(user) {
  return user.names + ' ' + user.pwd;
}
const user = {
  names: 'zj',
  pwd: '333222'
}

class VirBg extends React.Component {
  render() {
    return (
      <div>
        <h1>
          hi, {nametest(user)}!
        </h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/inquiry">问诊</Link></li>
          <li><Link to="/healthCheck">体检</Link></li>
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const element = (
  <HashRouter>
    <VirBg>
      <Route exact path="/" component={Logo} />
      <Route path="/inquiry" component={inquiry} />
      <Route path="/healthCheck" component={healthCheck} />
    </VirBg>
  </HashRouter>
)

ReactDOM.render(
  element,
  document.getElementById('content')
);
