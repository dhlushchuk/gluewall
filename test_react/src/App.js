import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import MainPage from './pages/main-page'
import Registration from './pages/registration'
import Authorization from './pages/authorization'
import Page from './pages/page'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowedSidebar: false,
      isPageOnload: false
    }
    this.changeColor = this.changeColor.bind(this)
    this.showSidebar = this.showSidebar.bind(this)
    this.pageOnload = this.pageOnload.bind(this)
  }
  changeColor = (e) => {
    document.getElementsByTagName('body')[0].style.backgroundColor = `${e.target.style.backgroundColor}`
    let user = JSON.parse(localStorage.getItem('user'))
    user.background = `${e.target.style.backgroundColor}`
    localStorage.setItem('user', JSON.stringify(user))  
  }
  componentDidMount(){
    let user = JSON.parse(localStorage.getItem('user'))
    document.getElementsByTagName('body')[0].style.backgroundColor = user.background
  }
  showSidebar = () => {
    this.state.isShowedSidebar ? this.setState({isShowedSidebar: false}) : this.setState({isShowedSidebar: true})
  }
  pageOnload = () => {
    this.setState({isPageOnload: true})
  }
  mainPageOnload = () => {
    this.setState({isPageOnload: false})
  }
  render(){
    return (
      <div>
        <Header showSidebar = {this.showSidebar}/>
        <Router>
          <Sidebar isShowedSidebar = {this.state.isShowedSidebar} isPageOnload = {this.state.isPageOnload} changeColor={this.changeColor}/>
          <Switch>
            <Route exact path="/" render={() => <MainPage mainPageOnload = {this.mainPageOnload} />} />
            <Route exact path="/registration" component={Registration} />
            <Route exact path="/authorization" component={Authorization} />
            <Route exact path="/page" render={() => <Page pageOnload = {this.pageOnload} />} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
App.propTypes = {
  isShowedSidebar: PropTypes.bool,
  isPageOnload: PropTypes.bool
}
App.defaultProps = {
  isShowedSidebar: false,
  isPageOnload: false
}

export default App