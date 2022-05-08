import React, { useEffect, useState } from 'react';

const useItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://nameless-bastion-91628.herokuapp.com/laptops')
            .then(res => res.json())
            .then(data => setItems(data))

    }, [])
    return [items]
};

export default useItems;