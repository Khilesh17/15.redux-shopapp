import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import {toast} from 'react-hot-toast'


export const Cartitem = ({ item }) => {
  
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed From Cart");
  }

  return (
    <div className='cart-container'>
      <div className='cart-item'>
        <div className='item-img-div'>
          <img className='item-image' src={item.image} alt="itemimage" />
        </div>

        <div className='other-detail'>
          <h1 className='item-title'>{item.title}</h1>
          <h1 className='item-desc'>{item.description.split(' ').slice(0, 15).join(' ') + '...'}</h1>
          <div className='other-section'>
            <p className='item-price'>${item.price}</p>
            <button className='btn-remove-item' onClick={removeFromCart}>
              <AiFillDelete/>
            </button>
          </div>
        </div>
      </div>
    </div>
 
  )
}
