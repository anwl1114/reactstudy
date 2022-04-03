import {React, useState} from 'react';
import './App.css';

function App() {
   //   const onSubmit = () => {
  //       alert('hello');
  //     }
    
      //onkeyup event
      const onKeyUp = (event) => {
        if(event.keyCode === 13) {
          onSubmit()
        }
      }
  
      {/* useState */}
  const [text, setText] = useState('무지');
  const onSubmit = () => {
    alert('submitted')
  }
      const Text = () => {
        setText('죠르디')
        console.log(text);
      }
  
    return (
      <div className="App">
        <input onKeyUp={onKeyUp} />
        <button onClick={onSubmit}>submit</button>
        <br /> <br />
  {/*use state*/}
        <span>{text}</span>
        <button onClick={Text}>update</button>
      </div>
    );
  }
export default App;
