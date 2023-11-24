import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cards = () => {
  const navigate = useNavigate();
  const [pasandoVariable, setPasandoVariable] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'https://manducares.com/api/v1/posts',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((response) => {
      setProducts(response.data.posts || []); // Ensure that response.data.posts is an array
    });
  }, []);

  const handleClick = (post) => {
    axios({
      method: 'get',
      url: `https://manducares.com/api/v1/posts/${post.id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((response) => {
      setPasandoVariable(response.data);
    });
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-24 py-16 sm:px-6 sm:py-24 lg:max-w-6xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((post) => (
            <div key={post.id} className="group relative" onClick={() => handleClick(post)}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <h4>{post.post}</h4>
              </div>
              <div className="mt-4 bg-teal-600 bg-opacity-30 shadow-lg rounded-lg flex justify-center items-center">
                <div className="">
                // <h3 className="text-xl font-semibold text-black">{post.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
