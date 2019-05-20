import React from 'react'
import { connect } from 'react-redux'
import { setExecutor } from '../../redux/actions/actions'

//import img1 from '../../assets/img/img1.png'
//import ava1 from '../../assets/img/ava1.png'
import price from '../../assets/img/price.png'
import det3 from '../../assets/img/det3.png'

import '../../assets/css/executor.css'



const Executor = (props) => {
  const {executor, executorState} = props
  if(executor !== undefined){
    return (
      <div className='executor' onClick={() => props.setExecutor(executor)} >
        <div className="executor-img">
          <img src={executor.img} alt="img" />
        </div>
        <div className='executor-data'>
          <div className="executor-data__name">{executor.name}</div>
          <div className="executor-data__data">
              <div className="executor-data__item">
                  <img src={price} alt="img" />
                  <p>Цена за 1 час аренды {executor.price}</p>
              </div>
              <div className="executor-data__item">
                  <img src={det3} alt="img" />
                  <p>Минимальное время аренды {executor.time}</p>
              </div>
          </div>
          <div className="executor-person">
              <img src={executor.owner.img} alt="img" />
              <div>
                <div className='executor-person__title'>Владелец: </div>
                <div className="executor-person__name">{executor.owner.name}</div>
              </div>
          </div>
        </div>
      </div>
    )
  } else  if(executorState !== undefined){
    return (
      <div className='executor' >
        <div className="executor-img">
          <img src={executorState.img} alt="img" />
        </div>
        <div className='executor-data'>
          <div className="executor-data__name">{executorState.name}</div>
          <div className="executor-data__data">
              <div className="executor-data__item">
                  <img src={price} alt="img" />
                  <p>Цена за 1 час аренды {executorState.price}</p>
              </div>
              <div className="executor-data__item">
                  <img src={det3} alt="img" />
                  <p>Минимальное время аренды {executorState.time}</p>
              </div>
          </div>
          <div className="executor-person">
              <img src={executorState.owner.img} alt="img" />
              <div>
                <div className='executor-person__title'>Владелец: </div>
                <div className="executor-person__name">{executorState.owner.name}</div>
              </div>
          </div>
        </div>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return{
    executorState: state.executor
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
      setExecutor: executor => {
          dispatch(setExecutor(executor))
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Executor)
