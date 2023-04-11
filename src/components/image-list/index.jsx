import React, { useState } from 'react';
import "./style.scss"

const ImageList = () => {
const [items] = useState({
   images:[
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },
        {
          image: 'img-01.jpg',
          data:"",
          views:""
        },  {
          image: 'img-01.jpg',
          data:"",
          views:""
        },

      ] 
});
  return (
    <div className='P-flex-container'>
        {items.images.map((item) => {
          return <div className='P-flex-box'  >
    <img src={`../../assets/images/${item.image} `} alt="" className='photo'/>
   <span></span> 
    </div>
         })}
   </div>
  );
}

export default ImageList ;