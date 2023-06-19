import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";
const MealsItem = (props)=>{





    const price  = `$${props.price}`;

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
          id: props.id,
          name: props.name,
          amount: amount,
          price: props.price,
        });
        
      };
      
    return (
        <li className="flex flex-row items-start justify-between m-4 pb-4 border-b-[1px] border-blue-600 " >
            <div   >
                <h3 className="mb-1 font-bold" >
                    {props.name}
                </h3>
                <div className="italic text-center">
                    {props.description}
                </div>
                <div className="mt-1 font-bold text-red-800 text-lg" >
                    {price}
                </div>
                
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} />
            </div>
        </li>
    )
};
export default MealsItem; 