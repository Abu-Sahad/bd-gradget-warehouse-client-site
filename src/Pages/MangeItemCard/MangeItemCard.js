import React from 'react';
import { useNavigate } from 'react-router-dom';

const MangeItemCard = ({item,handleDelete}) => {
    const {name,quantity,price,description,_id} = item
    const navigate = useNavigate()
   
    return (
        <div>
           <h1>{name}</h1>
           <p>Quantity : {quantity}</p>
           <p>Price : {price}</p>
           <button onClick={()=>handleDelete(_id)}>Delete</button>
           <button onClick={()=>navigate(`/laptop/${_id}`)}>Update</button>
        </div>
    );
};

export default MangeItemCard;