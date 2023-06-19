import Input from '../UI/Input'
import { useRef,useState } from 'react';
const MealItemForm = (props)=>{
    const [amountIsValid, setAmountValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
       
        

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0|| enteredAmount < 1 || enteredAmount >5){
            setAmountValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber); 

    };

    return (
        <form  action="" onSubmit={submitHandler}>
            <Input 
            ref={amountInputRef}
    label='Amount'
    input={{
        id: 'amount_' + props.id, // this changed!
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
    }}
/>
            
            <button type='Submit' className="bg-blue-900 shadow-md shadow-black text-white  focus:bg-white focus:border-blue-900 focus:border-[3px] focus:font-bold focus:text-black focus:shadow-sm rounded-3xl w-20" >Add+</button>
          
            {!amountIsValid && <p>please enter a valid amount! (1-5)</p>}
        </form>
    )
}

export default MealItemForm;