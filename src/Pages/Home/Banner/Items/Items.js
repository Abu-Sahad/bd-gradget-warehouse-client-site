import React from 'react';
import useItems from '../../../../hooks/useItems';
import Card from '../../Card/Card';
import './Item.css'

const Items = () => {
    const [items] = useItems()

    return (
        <div>
            <h1 className='text-center mt-5 mb-5'>Service of Inventory</h1>

            <div className='card-container container'>
                {
                    items.map(item => <Card key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Items;