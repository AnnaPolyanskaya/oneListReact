import React from 'react'
import AsideItem from './AsideItem'

import '../../assets/css/aside.css'

import man from '../../assets/img/man.png' 
import car from '../../assets/img/car.png'
import deal from '../../assets/img/deal.png'
import finance from '../../assets/img/finance.png'


const menuItems = [
    {
        id: 1,
        title: "Главная",
        items: [
            {
                id: 1.1,
                name: "Пользователи",
                img: man,
                sub: ["Всего пользователей", "Новые", "Количество", "По промокоду", "Не активные"]
            },
            {
                id: 1.2,
                name: "Техника",
                img: car,
                sub: ["Всего техники", "Новые", "Количество"]
            },
            {
                id: 1.3,
                name: "Сделки",
                img: deal,
                sub: ["Всего техники", "Новые", "Количество"]
            },
            {
                id: 1.3,
                name: "Финансы",
                img: finance,
                sub: ["Всего техники", "Новые", "Количество"]
            },
        
        ]
    },
    {
        id: 2,
        title: "Заявки на вывод",
        items: []
    },
    {
        id: 3,
        title: "Разделы для техники",
        items: []
    },
    {
        id: 4,
        title: "Пользователи",
        items: []
    },
    {
        id: 5,
        title: "Тарифы",
        items: []
    },
]
const Aside = () => {
  return (
    <div className='aside'>
        <div className='aside-cntnr'>
            {
                menuItems.map((it,i) => (
                    <AsideItem 
                        key={i}
                        title={it.title}
                        items={it.items}
                    />
                ))
            }   
        </div>
      
    </div>
  )
}

export default Aside
