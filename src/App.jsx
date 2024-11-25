import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementBy2, increment, incrementBy2 } from './features/counterSlice';

const App = () => {
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.counter.value);

  return (
    <div className='App'>
      <h1>Counter : {count} </h1>
      <button onClick={()=>dispatch((incrementBy2()))}>Increment by 2</button>
      <button onClick={()=>dispatch(decrementBy2())}>Decrement by 2</button>


      
    </div>
  )
}

export default App