import { DECREASE, INCREASE } from "./CounterAction"

 const reducer = (state,action)=>{
    console.log("REDUCER")

    if(action.type === DECREASE ){
        return {...state,count:state.count -1}
    }else if(action.type === INCREASE){
        console.log("IN")
        return {...state,count:state.count +1}
    }
    return state
}

export default reducer