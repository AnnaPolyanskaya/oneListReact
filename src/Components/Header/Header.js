import React, { Component } from 'react'

import '../../assets/css/header.css'

// images
import logo from '../../assets/img/logo.png'
import adminPanel from '../../assets/img/admin.png'
import menu1 from '../../assets/img/menu1.png'
import menu2 from '../../assets/img/menu2.png'
import menu3 from '../../assets/img/menu3.png'
import menu4 from '../../assets/img/menu4.png'
import menu5 from '../../assets/img/menu5.png'
import lang from '../../assets/img/lang.png'
import logout from '../../assets/img/logout.png'




const menuData = [
    {
        id: 1,
        name: 'Презентация',
        src: menu1
    },
    {
        id: 2,
        name: 'Новости',
        src: menu2
    },
    {
        id: 3,
        name: 'Правовая информация',
        src: menu3
    },
    {
        id: 4,
        name: 'F.A.Q.',
        src: menu4
    },
    {
        id: 5,
        name: 'Контакты',
        src: menu5
    },
]

export default class Header extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="main-head">
                <div className="container main-head__container">
                    <div className="main-head__left">
                        <div className="logo">
                            <a href="/">
                                <img src={logo} alt="img" /> 
                            </a>
                        </div>
                        <div className="adm-pan">
                            <img src={adminPanel} alt="img" />
                            <span>Админ <br/>панель</span>
                        </div>
                    </div>
                    <div className="main-head__right">
                        <div className="main-head__menu">
                            {menuData.map((it,i) => (
                                <div className="main-head__menu-item" key={it.id}>
                                    <img src={it.src} alt="img" />
                                    <p>{it.name}</p>
                                </div>
                            ))}            
                        </div>
                        <div className="main-head__logout">
                            <a href="/">
                                <img src={lang} alt="img" />
                            </a>
                            <a href="/">
                                <img src={logout} alt="img" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='breadcrumbs'>
                    <p>Главная/Пользователи/Меркушев Сергей Иванович/Заказы/2131231</p>                            
                </div>
            </div>
        </React.Fragment>
    )
  }
}
