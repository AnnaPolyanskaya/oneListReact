import React, { Component } from 'react'

import img1 from '../../assets/img/img1.png'
import img2 from '../../assets/img/img1.png'
import ava1 from '../../assets/img/ava1.png'
import ava2 from '../../assets/img/ava1.png'

import Executor from './Executor'


const data = [
    {
        id: 1,
        img: img1,
        name: "Экскаватор ЭКГ-20К М ",
        price: "5000 руб.",
        time: "3 дня",
        owner: {
            name: `Константин Константинополев`,
            img: ava1
        }
    },
    {
        id: 2,
        img: img1,
        name: "Экскаватор ЭКГ-20К М 1",
        price: "5000 руб.",
        time: "3 дня",
        owner: {
            name: `Константин Константинополев`,
            img: ava1
        }
    },
    {
        id: 3,
        img: img2,
        name: "Экскаватор ЭКГ-20К М 2",
        price: "5000 руб.",
        time: "3 дня",
        owner: {
            name: `Константин Константинополев`,
            img: ava2
        }
    },
    {
        id: 4,
        img: img1,
        name: "Экскаватор ЭКГ-20К М 3",
        price: "5000 руб.",
        time: "3 дня",
        owner: {
            name: `Константин Константинополев`,
            img: ava1
        }
    },
    {
        id: 5,
        img: img2,
        name: "Экскаватор ЭКГ-20К М 4",
        price: "5000 руб.",
        time: "3 дня",
        owner: {
            name: `Константин Константинополев`,
            img: ava2
        }
    },
]

export default class ExecutorsList extends Component {
  render() {
    return (
      <div className="executor-list" >
        {data.map((it,i) => (
            <Executor 
                id={it.id}
                key={i}
                executor={it}
            />
        ))}
      </div>
    )
  }
}


