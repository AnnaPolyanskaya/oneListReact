import React, { Component } from 'react'

import det1 from '../../assets/img/det1.png'
import det2 from '../../assets/img/det2.png'
import det3 from '../../assets/img/det3.png'
import det4 from '../../assets/img/det4.png'
import editPen from '../../assets/img/edit-pen.png'
import del from '../../assets/img/delete.png'

const details = [
    {
        img: det1,
        title: 'Раздел: ',
        text: "Погрузчики/5 тонн"
    }, 
    {
        img: det2,
        title: 'Куда: ',
        text: "Пер. Набережный, 11"
    }, 
    {
        img: det3,
        title: 'Когда: ',
        text: "12.11.2018 в 12:00"
    }, 
    {
        img: det4,
        title: 'Срок аренды: ',
        text: "1 час"
    }, 
]

export default class OrderDetails extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text: `Сомневаться в необходимости его изучения не приходится. Вопрос – как 
         прокачать владение языком без посещения курсов или учебы в 
         университете? К сожалению, разбудить в себе полиглота нежным 
         поглаживанием не получится. Сомневаться в необходимости его 
         изучения не приходится. Вопрос – как прокачать владение языком без 
         посещения курсов или учебы в университете? К сожалению, разбудить 
         в себе полиглота нежным поглаживанием не получится. 
         Сомневаться в необходимости его изучения не приходится. Вопрос – как 
         прокачать владение языком без посещения курсов или учебы в 
         университете? К сожалению, разбудить в себе полиглота нежным 
         поглаживанием не получится. Сомневаться в необходимости его 
         изучения не приходится. Вопрос – как прокачать владение языком без 
         посещения курсов или учебы в университете? К сожалению, разбудить 
         в себе полиглота нежным поглаживанием не получится. `,
         displayForm: false,

      }
    }

    inputChange = (event) => {
        event.preventDefault()
        this.setState({
            text: event.target.value
        })
    }
    

    toggleForm = () => {
        this.setState({
            displayForm: !this.state.displayForm
        })
    }

    clear = () => {
        this.setState({
            text: ""
        })
    }

  render() {
    const { text, displayForm } = this.state
    return (
      <div className='order-details__container'>
        <div className='order-detail'>
            {details.map((it, i) => (
                <div className='order-detail__item'>
                    <img src={it.img} alt='img' />
                    <span className='grey'>{it.title}</span>
                    <span className='bold'>{it.text}</span>
                </div>    
            ))}
            <button className='btn-red'>Предложений: 6</button>
        </div>
        <div className='order-text'>{text}</div>
        {displayForm 
            ? 
                <div className='order-edit'> 
                    <textarea
                        value = {text}
                        onChange = {this.inputChange}
                        type={text}
                        rows="10"
                    />
                </div>
            : <React.Fragment />
        }
        
        <div className='order-btns'>
            <button 
                className="btn-white"
                onClick={this.toggleForm}
            >
                <img src={editPen} alt="img" />
                Редактировать
            </button>
            <button 
                className="btn-red"
                onClick={this.clear}
            >
                <img src={del} alt="img" />
                Удалить
            </button>
        </div>
      </div>
    )
  }
}
