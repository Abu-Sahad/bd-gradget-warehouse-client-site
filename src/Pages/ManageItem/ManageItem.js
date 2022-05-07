import React, { useEffect, useState } from 'react';
import useItems from '../../hooks/useItems';
import MangeItemCard from '../MangeItemCard/MangeItemCard';
import './ManageItem.css'
const ManageItem = () => {
   
    const [reload,setReLoad] = useState(false)
    const [items ,setItems] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/laptops')
        .then(res => res.json())
        .then(data => setItems(data))

    },[reload])
    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/laptop/${id}`,{
            method:'DELETE',
        })
        .then(res => res.json())
        .then(() => {
           alert('Item Deleted')
           setReLoad(!reload)
        })
    }
   
    
    return (
        <div>
            {
                items.map(item => <MangeItemCard key={item._id} item = {item} handleDelete = {handleDelete} /> )
            }
        </div>
    );
};

export default ManageItem;