import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { Cartitem } from '../components/Cartitem';


export const CartPage = () => {

  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className='cart'>
      {
        cart.length > 0 ?
          (
            <div className='cart-div'>
              <div className='cart-items'>
                {
                  cart.map((item, index) => {
                    return <Cartitem key={item.id} item={item} />
                  })
                }
              </div>

              <div className='details'>
                <div className='detail-top'>
                  <div className='your-cart'>Your Cart</div>
                  <div className='summary'>Summary</div>
                  <div className='total-item'>Total items : { cart.length }</div>
                </div>

                <div className='detail-bottom'>
                  <p className='total-amount'>Total Amount : <span>${totalAmount}</span> </p>
                  <button className='btn-checkout'>CheckOut Now</button>
                </div>
              </div>
            </div>
          )
          :
          (
            <div className='empty-div'>
              <h1 className='empty-heading'>Empty</h1>
              <NavLink to='/'>
                <button className='btn-shop'>Shop Now</button>
              </NavLink>
            </div>
          )
      }



    </div>
  )
}
