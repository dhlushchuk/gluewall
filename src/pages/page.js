import React, { Component } from 'react'
import './page.css'
const user = JSON.parse(localStorage.getItem('user'))

export default class Page extends Component {
    constructor(props){
        super(props)
        this.state = {
            userFirstName: "",
            userLastName: ""
        }
        this.editName = this.editName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    editName = () => {
        this.refs.usernameEdit.className = "username-edit-hide"
        this.refs.usernameSave.className = "username-save-show"
    }
    onSubmit = (e) => {
        this.refs.usernameEdit.className = "username-edit"
        this.refs.usernameSave.className = "username-save"
        user.username = this.refs.inputUsername.value
        user.lastname = this.refs.inputLastname.value
        localStorage.setItem('user', JSON.stringify(user)) 
        this.setState({userFirstName: this.refs.inputLastname.value, userLastName: this.refs.inputUsername.value})
        e.preventDefault()
    }
    componentWillMount(){
        this.setState({userFirstName: user.lastname, userLastName: user.username})
    }
    componentDidMount(){
        this.props.pageOnload()
    }
    render(){
        const getRegistrationDate = (date) => {
            return (new Date().getDate()) - (new Date(date).getDate())
        }
        return (
            <div className="page-main">
                <div className="username-edit" ref="usernameEdit">
                <p ref="userFullName">{this.state.userLastName} {this.state.userFirstName}</p>
                <button className="button-edit-name" onClick={this.editName}>Редактировать</button>
            </div>
            <div className="username-save" ref="usernameSave">
                <form onSubmit={this.onSubmit}>
                    <input minLength="1" maxLength="15" className="inputs" ref="inputUsername" defaultValue={this.state.userLastName} type="text" placeholder="Имя" autoComplete="off" required/>
                    <input minLength="1" maxLength="15" className="inputs" ref="inputLastname" defaultValue={this.state.userFirstName} type="text" placeholder="Фамилия" autoComplete="off" required/>
                    <input type="submit" className="button-edit-name" id="buttonSave" value="Сохранить"/>
                </form>
            </div>
            <p>Дата рождения: {user.bday} {user.bmonth} {user.byear}</p>
            <p>Дней с момента регистрации: {getRegistrationDate(user.registrationDate)}</p>
            </div>
        );
    } 
}