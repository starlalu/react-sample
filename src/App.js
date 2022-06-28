import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeaderClass from './components/HeaderClass';
import {useState,useEffect} from 'react';
import Counter from './components/Counter';
import Employee  from './components/Employee';
function App() {
  const test='Lalu KS';
   //let count=0; 
  const [count,SetCounter]=useState(0);
  const [buttonStatus,SetButtonStatus]=useState(false);
  useEffect(()=>{
    console.log("mounting"+count);
    return ()=>{
      console.log("Clean up"+count);
    }
  },[count]);
  const counter=()=>{
    //count=count+1;
    //console.log(count);
    SetCounter(count+1);
  }
  let obj={
    title:"First Title",
    count,
    topic:"test"
  };
  let emp_arr=[{
    name:"Lalu KS",
    age:"29"
  },{
    name:"Amal KS",
    age:"20"
  } ,{
    name:"Sachin GS",
    age:"20"
  },{
    name:"Asokan MP",
    age:"33"
  } ]
  return (
    <div className="App">
      <HeaderClass data1={test}/>
      <Header data={test}/>
      <button onClick={counter}>Counter:</button>
      <p>{count}</p>
      <p>Next Line</p>
      <button onClick={()=>SetButtonStatus(!buttonStatus)}>Show/Hide</button>
      <br/>
      {buttonStatus ? <Counter {...obj}/> : null }
      <br/>
      {buttonStatus && <Counter {...obj}/> }
      <br/>
      <Counter title='Second Title' count={count}/>
      <p style={{ backgroundColor:'yellow' }}>test 1</p>
      <p className='test'>test 2</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello/>
      </header>

      {
         /*emp_arr.map((obj,index)=>{
            return( <Employee key={index} name={obj.name} age={obj.age}/>);
          })   */    // Method 1
          emp_arr.map((obj,index)=>
          (
            <Employee key={index} {...obj}/>
          )
          )
          
      }
    </div>
  );
}

export default App;

function Hello(){
  return (
    <p className='test'>test 2</p>
    );
}

