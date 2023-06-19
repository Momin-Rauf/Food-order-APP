import { Fragment, useState } from "react"
import Header from "./components/Layout/Header"
import Meals from "./components/Meals/Meals"
import Cart from "./components/Cart/Cart"
import CartProvider from "./Store/CartProvider"




function App() {
  
  
  const [showCart,setShowCart] = useState(false); 


  
  const CartShowHandler = () => {
      setShowCart(true);;
  }

  
  const CartHideHandler = () => {
    setShowCart(false);;
} 
  return (
<CartProvider>
    {showCart && <Cart CartHide={CartHideHandler} />}
    <div className="bg-blue-400 text-white pb-2" >
    <Header  Cart={CartShowHandler}/>
    <main>
      <Meals/>
    </main>
    </div>
    {/* <Footer/> */}
    </CartProvider>
  )
}

export default App
