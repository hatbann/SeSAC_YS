
import './App.css';
import puppy from '../src/동글이.jpg';
import React, { useState } from 'react';
import MainHeader from './components/MainHeader';
import ImgComponent from './components/ImgComponent';
import BtnToNaver from './components/BtnToNaver';

function App() {
  const hello = "Hello";
  const styles ={fontSize : "40px", fontWeight : "600", color: "tomato"};
  let helloStr = "Hello, first exercise";
  function amazing() {
    alert("amzing");
  }
  
  let [num, setNum] = useState(0);

  function SubHeader() {
    return(
      <h2>
        subHeader
      </h2>
    )
  }
  return (
    /*
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
      <div style={{marginTop:"32px", backgroundColor : "skyblue"}} onClick={() =>{alert("클릭 됨");}}>
        <span>
          {helloStr}
        </span>
      </div>
    </div>
    */
   /*
   <div className='App'>
     <MainHeader/>
     <SubHeader/>
   </div>
   */
   <div className='App'>
    
   <ImgComponent/>
   <BtnToNaver/>
 </div>
  );
}

export default App;
