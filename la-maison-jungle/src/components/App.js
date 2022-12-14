import { useState, useEffect } from 'react'
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Footer from './Footer'
import '../styles/Layout.css'




function App() {
  //on doit remonter un state pour pouvoir l'utiliser ds les differents composants
  const cartFromLocalStorage = localStorage.getItem('cart')
  const [cart, updateCart] = useState(cartFromLocalStorage ? JSON.parse(cartFromLocalStorage) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  return (<div>
    <Banner />
    <div className='lmj-layout-inner'>
      {/* on récupére le prop 'cart' de notre composant */}
      <Cart cart={cart} updateCart={updateCart} />
      <ShoppingList cart={cart} updateCart={updateCart} />
    </div>
    <Footer />
  </div>
  )
}

export default App;
