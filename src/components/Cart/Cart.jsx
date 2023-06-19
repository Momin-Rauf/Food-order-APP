import { useContext } from "react";
import CartContext from "../../Store/cart-context";
import { Fragment } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart  = (props) =>{

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
  
    const cartItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
    };
  
    const cartItemAddHandler = (item) => {
      cartCtx.addItem({...item, amount: 1});
    };
  
    const cartItems = (
      <ul className="">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
    );
    return (

        
        <Modal CartHide={props.CartHide} >
            {cartItems}
            <div className=" w-40 border-[1px] border-white rounded-2xl rounded-l-none relative right-4 bg-blue-700 text-white px-2 py-1 text-center" ><span>Total Amount: </span><span>{totalAmount}</span></div>
            <div className="flex flex-row justify-between mt-4" >
                <button className="border-[1px] border-white bg-blue-700 text-white hover:bg-blue-900 rounded-2xl w-16 " >
                    Order
                </button>
                <button onClick={props.CartHide} className="border-[1px] border-white bg-blue-700 text-white hover:bg-blue-900 rounded-2xl w-16  " >
                    Close
                </button>
                {hasItems && <button>Order</button>}
            </div>
            </Modal>
    )

}

export default Cart;