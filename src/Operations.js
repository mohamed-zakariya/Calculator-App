function Operations(props){
     function operations(e,x){
        let flag = true;
        e.preventDefault();
        
        if(x.operation === "+"){
            x.setResult((result) => result + Number(x.input.current.value)); 
        }
        else if(x.operation === "-"){
            x.setResult((result) => result - Number(x.input.current.value)); 
        }
        else if(x.operation === "*"){
            x.setResult((result) => result * Number(x.input.current.value)); 
        }    
        else if(x.operation === "/"){
            x.setResult((result) => result / Number(x.input.current.value));
        }
        else if(x.operation === "="){
            x.input.current.value = x.result;
        }
        else if(x.operation === "+/-"){
            x.setResult((result) => result * -1);
        }
        else if(x.operation === "."){
            x.input.current.value += ".";
            x.setNumber(x.input.current.value);
            flag = false;
        }
        else if(x.operation === "^"){
            x.setResult((result) => result = Math.pow(x.input.current.value,2));
        }
        else if(x.operation === "sqr"){
            x.setResult((result) => result = Math.sqrt(x.input.current.value));
        }
        else if(x.operation === "C"){
            x.setResult(0);
            x.input.current.value = "";
        }
        if(flag){
            x.setNumber("");    
        }
    }
    return(
        <button id="unique" onClick={(e) => operations(e,props)}>{props.sign}</button>
    )
}
export default Operations;