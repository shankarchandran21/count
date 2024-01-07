import { createStore } from 'redux';
import reducer from './CounterReducer'

const initialStore = {
    count:0
}



const store=createStore(reducer,initialStore)


export default store