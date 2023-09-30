import React, { useEffect, useState } from 'react'
import {Spinner} from '../components/Spinner';
import { Product } from '../components/Product';
import {products} from '../data';

export const HomePage = () => {
  
  
  const [loading, setLoading] = useState(false);
  // const [posts, setPosts] = useState(products);
  
  const API_URL = "https://fakestoreapi.com/products";
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const result = await fetch(API_URL);
      const data = await result.json();

      setPosts(data);
    }
    catch (err) {
      console.log("Error aa giya" + err);
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);
  
  return (
    <div className='home'>
      {
        loading ? (<Spinner />) :
          (
            posts.length > 0 ? 
              (
                <div className='home-data'>
                  {
                    posts.map((post) => {
                      return <Product key={post.id} post={post}/>
                    })
                  }
                </div>
              )
              :
              (
                <div className='home-no-data'>
                  No Data Found
                </div>
              )
          )
      }


    </div>
  )
}
