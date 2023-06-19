import { Fragment, useContext } from 'react';
import CartContext from "../../Store/cart-context";
import { MdAddShoppingCart } from 'react-icons/md';

const HeaderCartButton = (props)=>{
    const cartCtx = useContext(CartContext);

    
    const numberofItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount;

    },0);


    return(
        <Fragment>
            
        <button className="flex flex-row justify-center items-center rounded-2xl border-[.5px]  bg-blue-600 text-white w-48 " onClick={props.Cart} >
            <span className='z-10 hover:h-auto w-auto m-2' >
                <MdAddShoppingCart/>
            </span>
            <span className='text-sm hover:invisible m-2'>
                Your Cart
            </span>
            <span className='text-sm hover:invisible bg-blue-400 border-[.5px] rounded-full w-5 m-1' >
                {numberofItems}
            </span>
        </button>
        
        </Fragment>
    )
}

export default HeaderCartButton;