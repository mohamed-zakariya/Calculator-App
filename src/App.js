import './App.css';
import{useState,useRef} from 'react';
import Numbers from './Numbers';
import Operations from './Operations';

  function App() {
  const [result, setResult] = useState(0);
  const [number, setNumber] = useState("");
  const [mode, setMode] = useState(false);

  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const buttonRef = useRef(null); 
  

  const handleChange = (event) =>{
    (event.target.checked)? setMode(true):setMode(false);
  }
 
  return (
    <div className="App">
      <div id = "calc" className={(mode)?'calculator-dark':'calculator-light'}>
          <h1 id = "calc-type" className={(mode)?'calc-type-dark':'calc-type-light'}>Calculator</h1>
          <p id ="show-result" className={(mode)?"Show-Result-dark":'Show-Result-light'} ref={resultRef}>
              {result}
            </p>
            <input 
            id="clear"
            ref={inputRef}
            type='string'
            placeholder='type a number'
            className={(mode)?'Desgin-input-dark':'Desgin-input-light'}
            >
            </input>
          <form  className={(mode)?'Desgin-form-dark' :'Desgin-form-light' }>
            {/* Clear */}
            <Operations  input={inputRef} setNumber = {setNumber} result = {result} setResult ={setResult} operation="C" sign ="CE"/>

            {/* SquareRoot */}
            <Operations input={inputRef} setNumber = {setNumber} result = {result} setResult ={setResult} operation="sqr" sign = {<span>&#8730;</span>}/>

            {/* Power */}
            <Operations input={inputRef} setNumber = {setNumber} result = {result} setResult ={setResult} operation="^" sign = {<span>x<sup>2</sup></span>}/>
            

            {/* Divided */}
            <Operations input={inputRef} setNumber = {setNumber} setResult ={setResult} result = {result} operation="/" sign = {<span>&#247;</span>}/>

            <Numbers buttonRef ={buttonRef} number={number} setNumber={setNumber} data = '7' inputRef = {inputRef}/>
            <Numbers buttonRef ={buttonRef} number={number} setNumber={setNumber} data = '8' inputRef = {inputRef}/>
            <Numbers buttonRef ={buttonRef} number={number} setNumber={setNumber} data = '9' inputRef = {inputRef}/>

            {/* Multiplication */}
            <Operations input={inputRef} setNumber = {setNumber} setResult ={setResult} result = {result} operation="*" sign = {<span>&#215;</span>}/>

            <Numbers buttonRef ={buttonRef} number={number} setNumber={setNumber} data = '4' inputRef = {inputRef}/>
            <Numbers buttonRef ={buttonRef} number={number} setNumber={setNumber} data = '5' inputRef = {inputRef}/>
            <Numbers buttonRef ={buttonRef} number={number} setNumber={setNumber} data = '6' inputRef = {inputRef}/>
            {/* Subtraction */}
            <Operations input={inputRef} setNumber = {setNumber} setResult ={setResult} result = {result} operation="-" sign = "-"/>

            <Numbers buttonRef ={buttonRef} number={number} setNumber={setNumber} data = '1' inputRef = {inputRef}/>
            <Numbers buttonRef ={buttonRef} number={number} setNumber={setNumber} data = '2' inputRef = {inputRef}/>
            <Numbers buttonRef ={buttonRef} number={number} setNumber={setNumber} data = '3' inputRef = {inputRef}/>
            {/* Addition */}
            <Operations input={inputRef} setNumber = {setNumber} setResult ={setResult} result = {result} operation="+" sign = "+"/>

            {/* Negate */}
            <Operations input={inputRef} setNumber = {setNumber} setResult ={setResult} result = {result} operation="+/-" sign = "+/-"/>
            
            <Numbers buttonRef ={buttonRef} number={number} setNumber={setNumber} data = '0' inputRef = {inputRef}/>

            {/* Decimal */}
            <Operations input={inputRef} setNumber = {setNumber} number = {number} setResult ={setResult} operation="." sign = "."/>

            {/* Equal */}
            <Operations input={inputRef} setNumber = {setNumber} setResult ={setResult} result = {result} operation="=" sign = "="/>
            
          </form>
          <div className='Mode'>
          <span className='light-mode'>Light Mode</span>
          <span className='dark-mode'>Dark Mode</span>
          
          <input type="checkbox"  className='input-style' onChange={handleChange} id="subscribe" name='subscribe'/>
          <label for="subscribe" className='label-style' ></label>

          <div className='background' ></div>
          </div>
      </div>
        

    </div>
  );
}

export default App;
