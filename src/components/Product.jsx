import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice';
import {toast} from 'react-hot-toast'

export const Product = ({ post }) => {

  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item Added to Cart");
  }
  
  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item Removed From Cart");
  }

  return (
    <div className='product'>
      <div className='title'>
        <p>{post.title.substring(0, 15) + '...'}</p>
      </div>
      
      <div className='desc'>
        <p>{post.description.split(' ').slice(0, 10).join(' ') + '...'}</p>
      </div>

      <div className='img-div'>
        <img className='image' src={post.image} alt="logo"/>
      </div>

      <div className='btn-div'>

        <div className='price'>
          <p>${post.price}</p>
        </div>

        {
          cart.some((p)=>p.id === post.id) ? 
            (
              <button className='btn btn-remove' onClick={removeFromCart}>
                Remove Item
              </button>
            )
            : 
            (
              <button className='btn btn-add' onClick={addToCart}>
                Add to Cart
              </button>
            )
        }
      </div>

    </div>
  )
}
