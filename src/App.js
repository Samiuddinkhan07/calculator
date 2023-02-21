/* eslint-disable default-case */
import { useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';
import './App.css';
import './style.css'



 export const ACTIONS = {
  ADD_DIGIT:'add-digit',
  CHOOSE_OPERATION:"choose-operation",
  CLEAR:"clear",
  DELETE_DIGIT:"delete-digit",
  EVALUATE:"evaluate",
}

function reducer(state,{type , payload}){
  switch(type){
    case ACTIONS.ADD_DIGIT:
      if(payload.digit === "0" && state.currentValue === "0"){
        return state
      }
      if(payload.digit === "." && state.currentValue.includes(".")){
        return state
      }
      return {
        ...state,
        currentValue:`${state.currentValue || ""}${payload.digit}`,
      }
  }
}



function App() {
  const [{currentValue,previousValue,operation}, dispatch] = useReducer(reducer,{})

  // dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit:1}})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-value">{previousValue} {operation}</div>
        <div className="current-value">{currentValue}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OperationButton operation="/" dispatch={dispatch}/>
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch}/>
      <OperationButton operation="." dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch}/>
      <button className="span-two">=</button>

    </div>
  );
}

export default App;
