import React from 'react'
import { connect } from 'react-redux'
import { INCREASE ,DECREASE } from '../Redux/CounterAction'





function Counter({count,increment, decrement}) {
//count,increment, decrement this are coming from mapStateToProps,mapDispatchToProps

  return (
    <div>
        <p>Count : {count} </p>
    <button onClick={()=>increment()}>INCREMENT</button>
    <button  onClick={()=> decrement()} >DECREMENT</button>
    </div>
  )
}

const mapStateToProps = state =>{
 
    return state
}

const mapDispatchToProps = dispatch=>{
    return {
        increment: () => dispatch({type: INCREASE}),
        decrement: () => dispatch({ type: DECREASE}),
      };
}
// mapStateToProps is a function in that we get state variable(count),mapDispatchToProps access reducer. 
export default connect (mapStateToProps,mapDispatchToProps) (Counter) //connect using to connect redux like this only we want to connect