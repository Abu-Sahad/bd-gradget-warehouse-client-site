import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleItem.css'

const SingleItem = () => {
    const [item,setItem]  = useState({})
    const {id} = useParams()
    useEffect(()=>{
        fetch(`http://localhost:5000/laptops/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    
    },[id])
    const {name,description,price,image,_id,supplierName,quantity} = item
    return (
        <div>
        
        <div className='single-card'>
             <img src={image} alt="" />
             <h1>{name}</h1>
             <p>{price}</p>
             <p>Quantity : {quantity}</p>
             <input type="number" placeholder='Add quantity' /> <br />
               <button>Update  Quantity</button>
         </div>
        
         
     </div>
    );
};

export default SingleItem;