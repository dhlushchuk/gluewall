import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import Header from './components/header'
import Footer from './components/footer'
import Sidebar from './components/sidebar'
import { showSidebar } from './components/actions'
import MainPage from './pages/main-page'
import Registration from './pages/registration'
import Authorization from './pages/authorization'
import Page from './pages/page'
import './App.css'
const user = JSON.parse(localStorage.getItem('user'))
const background = document.getElementsByTagName('body')[0] 

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   isShowedSidebar: false,
    //   isPageOnload: false,
    //   backgroundTheme: ""
    // }
    this.changeColor = this.changeColor.bind(this)
    this.showSidebar = this.showSidebar.bind(this)
    this.pageOnload = this.pageOnload.bind(this)
  }
  changeColor = (e) => {
    background.style.backgroundColor = `${e.target.style.backgroundColor}`
    user.background = `${e.target.style.backgroundColor}`
    localStorage.setItem('user', JSON.stringify(user))
  }
  componentWillMount() {
    user.signIn === "true" ? this.setState({backgroundTheme: user.background}) : this.setState({backgroundTheme: ""})
  }
  componentDidMount(){
    background.style.backgroundColor = this.state.backgroundTheme
  }
  showSidebar = () => {
    //this.state.isShowedSidebar ? this.setState({isShowedSidebar: false}) : this.setState({isShowedSidebar: true})
    this.props.store.getState().showSidebar ? this.props.store.dispatch(showSidebar(false)) : this.props.store.dispatch(showSidebar(true)) 
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
          {/* <Sidebar {...this.state} changeColor={this.changeColor} /> */}
          <Sidebar store={this.props.store} changeColor={this.changeColor} />
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
  isPageOnload: PropTypes.bool,
  backgroundTheme: PropTypes.string
}
App.defaultProps = {
  isShowedSidebar: false,
  isPageOnload: false
}

export default App