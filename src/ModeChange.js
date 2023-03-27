function ModeChange(){
   
    const handleChange = event => {
        var calc = document.getElementById("calc");
        var calcType = document.getElementById("calc-type"); 
        var desginForm = document.getElementById("Desgin-form");
        var desginInput = document.getElementById("clear");
        var showResult = document.getElementById("show-result");
    
        if (event.target.checked) {
          
          calc.classList.add('calculator-dark');
          calcType.classList.add('calc-type-dark');
          desginForm.classList.add('Desgin-form-dark');
          desginInput.classList.add('Desgin-input-dark');
          showResult.classList.add('Show-Result-dark');
    
          calc.classList.remove('calculator-light');
          calcType.classList.remove('calc-type-light');
          desginForm.classList.remove('Desgin-form-light');
          desginInput.classList.remove('Desgin-input-light');
          showResult.classList.remove('Show-Result-light');
    
    
          console.log('✅ Checkbox is checked');
        } else {
          
          calc.classList.remove('calculator-dark');
          calcType.classList.remove('calc-type-dark');
          desginForm.classList.remove('Desgin-form-dark');
          desginInput.classList.remove('Desgin-input-dark');
          showResult.classList.remove('Show-Result-dark');
    
    
          calc.classList.add('calculator-light');
          calcType.classList.add('calc-type-light');
          desginForm.classList.add('Desgin-form-light');
          desginInput.classList.add('Desgin-input-light');
          showResult.classList.add('Show-Result-light');
          console.log('⛔️ Checkbox is NOT checked');
        }
      };
    return(
        <>
        <input type="checkbox"  className='input-style' onChange={handleChange} id="subscribe" name='subscribe'/>
        <label htmlFor="subscribe" className="label-style"></label>
        
        </>
    )
}
export default ModeChange;



 // function modechange(e, x){
    //     e.preventDefault();
    //     var calc = document.getElementById("calc");
    //     var calcType = document.getElementById("calc-type"); 
    //     var desginForm = document.getElementById("Desgin-form");
    //     var desginInput = document.getElementById("clear");
    //     var showResult = document.getElementById("show-result");

    //     if (x.mode === "true") {
        
    //     calc.classList.add('calculator-dark');
    //     calcType.classList.add('calc-type-dark');
    //     desginForm.classList.add('Desgin-form-dark');
    //     desginInput.classList.add('Desgin-input-dark');
    //     showResult.classList.add('Show-Result-dark');

    //     calc.classList.remove('calculator-light');
    //     calcType.classList.remove('calc-type-light');
    //     desginForm.classList.remove('Desgin-form-light');
    //     desginInput.classList.remove('Desgin-input-light');
    //     showResult.classList.remove('Show-Result-light');

    //     x.setMode("false");
    //     console.log('✅ Checkbox is checked');
    //     } else {
        
    //     calc.classList.remove('calculator-dark');
    //     calcType.classList.remove('calc-type-dark');
    //     desginForm.classList.remove('Desgin-form-dark');
    //     desginInput.classList.remove('Desgin-input-dark');
    //     showResult.classList.remove('Show-Result-dark');


    //     calc.classList.add('calculator-light');
    //     calcType.classList.add('calc-type-light');
    //     desginForm.classList.add('Desgin-form-light');
    //     desginInput.classList.add('Desgin-input-light');
    //     showResult.classList.add('Show-Result-light');

    //     x.setMode("true");
    //     console.log('⛔️ Checkbox is NOT checked');
    //     }
    // }