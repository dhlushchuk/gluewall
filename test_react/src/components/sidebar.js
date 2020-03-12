import React from 'react'
import Palette from './palette'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const checkAuthorization = () => {
        if(user !== null && user.signIn === "true") {
            return '/page'
        }
        else {
            return '/authorization'
        }
    }
    return (
        <div className={(props.isShowedSidebar) ? "sidebar sidebar-show" : "sidebar"}>     
            <ul>
                <Link to='/' className='links'>
                    <li>На главную</li>
                </Link>
                <Link to={checkAuthorization} className={(props.isPageOnload) ? "links signification-hide" : "links signification"}>
                    <li>Войти</li>
                </Link>
                <Link to='/registration' className='links'>
                    <li>Регистрация</li>
                </Link>
                <Link to='/' className='links'>
                    <li>Новости</li>
                </Link>
                <Link to='/' className='links'>
                    <li>Услуги</li>
                </Link>
                <Link to='/' className='links'>
                    <li>О нас</li>
                </Link>
                <Link to='/' onClick={() => { 
                        user.signIn = "false" 
                        localStorage.setItem('user', JSON.stringify(user)) 
                    }} className={(props.isPageOnload) ? "links logout-show" : "links logout"}>
                    <li>Выйти</li>
                </Link>
            </ul>
            <div className={(props.isPageOnload) ? "palette-show" : "palette-hide"}>
                <Palette changeColor={props.changeColor}/>
            </div>
        </div>
    );
}

export default Sidebar