import React, { useEffect, useState } from 'react';

const useItems = () => {
    const [items ,setItems] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/laptops')
        .then(res => res.json())
        .then(data => setItems(data))

    },[])
    return [items]
};

export default useItems;