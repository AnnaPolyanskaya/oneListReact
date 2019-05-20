import React, { Component } from 'react'
import '../../assets/css/order.css'
import OrderDetails from './OrderDetails'
import Executor from './Executor'
import ExecutorList from './ExecutorsList'



export default class Order extends Component {


  render() {
    return (
      <div className='order-cntnr'>
        <div className='order-title'>Детали заявки: 1223111</div>
        <div className='half'>
          <OrderDetails />
          <div className='executor-ttl'>
            Выбранный исполнитель
          </div>
          <Executor />
        </div>
        <div className='half'>
          <ExecutorList />
        </div>
      </div>
    )
  }
}
