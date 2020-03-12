import React, { Component } from 'react'
import './page.css'

export default class Page extends Component {
    constructor(props){
        super(props)
        this.editName = this.editName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    user = JSON.parse(localStorage.getItem('user'))
    editName = () => {
        this.refs.usernameEdit.className = "username-edit-hide"
        this.refs.usernameSave.className = "username-save-show"
    }
    onSubmit = () => {
        this.refs.usernameEdit.className = "username-edit"
        this.refs.usernameSave.className = "username-save"
        this.user.username = this.refs.inputUsername.value
        this.user.lastname = this.refs.inputLastname.value
        localStorage.setItem('user', JSON.stringify(this.user)) 
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
                <p ref="userFullName">{this.user.username} {this.user.lastname}</p>
                <button className="button-edit-name" onClick={this.editName}>Редактировать</button>
            </div>
            <div className="username-save" ref="usernameSave">
                <form onSubmit={this.onSubmit}>
                    <input minLength="1" maxLength="15" className="inputs" ref="inputUsername" defaultValue={this.user.username} type="text" placeholder="Имя" autoComplete="off" required/>
                    <input minLength="1" maxLength="15" className="inputs" ref="inputLastname" defaultValue={this.user.lastname} type="text" placeholder="Фамилия" autoComplete="off" required/>
                    <input type="submit" className="button-edit-name" id="buttonSave" value="Сохранить"/>
                </form>
            </div>
            <p>Дата рождения: {this.user.bday} {this.user.bmonth} {this.user.byear}</p>
            <p>Дней с момента регистрации: {getRegistrationDate(this.user.registrationDate)}</p>
            </div>
        );
    } 
}