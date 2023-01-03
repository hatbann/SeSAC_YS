
import './App.css';
import puppy from '../src/동글이.jpg';
import React, { useState } from 'react';

function App() {
  const hello = "Hello";
  const styles ={fontSize : "40px", fontWeight : "600", color: "tomato"}
  let helloStr = "Hello, first exercise";
  function amazing() {
    alert("amzing");
  }

  function alerting() {
    alert("클릭 됨");
  }
  let [num, setNum] = useState(0);
  return (
    <div className="App">
      <div style={{display : "none"}}>
        <div style={styles}>{hello}</div>
        <br></br>
        <img src={puppy}></img>
        <span onClick={()=>{
          setNum(num++);
        }}>클릭</span>
        <span> : {num}</span>
      </div>
      <div style={{marginTop:"32px", backgroundColor : "skyblue"}} onClick={alerting}>
        <span>
          {helloStr}
        </span>
      </div>
    </div>
  );
}

export default App;
