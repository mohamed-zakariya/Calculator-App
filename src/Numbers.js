function Numbers(props){
    //function of putting input in the input label
    function input(x,e){
        e.preventDefault();
        x.inputRef.current.value =   x.number + x.data;
        x.setNumber(x.inputRef.current.value);
        
    }
    return (
        <button  ref={props.buttonRef} onClick={(e) => input(props,e)}> {props.data} </button>
    )
}
export default Numbers;