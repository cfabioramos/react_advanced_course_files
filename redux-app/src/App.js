import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, login, logoff } from './actions'

function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.logginReducer)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>&nbsp;
        <button onClick={() => dispatch(increment(4))}>+</button>&nbsp;
        <button onClick={() => dispatch(decrement())}>-</button>
      <br/>
      <button onClick={() => dispatch(login())}>Sign in</button>&nbsp;
      <button onClick={() => dispatch(logoff())}>Log off</button>
      { isLogged ? <h3>Valuable Information I shoudn't see</h3> : '' }
    </div>
  );
}

export default App;
