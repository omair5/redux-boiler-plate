import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, sign_in } from './actions'

function App() {
  const counter = useSelector(state => state.CounterReducer)
  const islogged = useSelector(state => state.IsloggedReducer)
  const dispatch = useDispatch()
  console.log(counter)
  return (
    <div className="App">
      <h1>PRACTICING REDUX</h1>
      <p>A State Management Library</p>
      <b>TO INSTALL :</b>
      <p>npm install --save redux react-redux</p>
      <br /><br /><br />
      <h1>MY COUNTER : {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>increment</button>
      <button onClick={() => dispatch(decrement())} > decrement</button>
      <button onClick={() => dispatch(reset())} > reset</button>
      {islogged ? <h1>it is true</h1> : <h1>it is false</h1>}
      <button onClick={() => dispatch(sign_in())}>change</button>

    </div>
  );
}

export default App;
