import * as C from '../actions/actionTypes'
import img1 from '../../assets/img/img1.png'
import img2 from '../../assets/img/img1.png'
import ava1 from '../../assets/img/ava1.png'
import ava2 from '../../assets/img/ava1.png'

const initialState = {
    id: 1,
    img: img1,
    name: "Экскаватор ЭКГ-20К М",
    price: "5000 руб.",
    time: "3 дня",
    owner: {
        name: `Константин Константинополев`,
        img: ava1
    }
}

export const executorReducer = ( state = initialState, action ) => {
    switch(action.type){
        case C.CHOOSE_EXECUTOR:
                console.log(action)
            return state = action.payload
        default:
            return state
    }
}