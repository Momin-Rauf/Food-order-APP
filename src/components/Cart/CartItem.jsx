// import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li >
      <div>
        <h2>{props.name}</h2>
        <div >
          <span className="">{price}</span>
          <span className="">x {props.amount}</span>
        </div>
      </div>
      <div className="">
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;