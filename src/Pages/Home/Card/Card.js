import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Card.css'

const Card = ({ item }) => {
    const [laptop, setLaptop] = useState({})
    const { name, description, price, image, _id, supplierName, quantity } = item
    const handleUpdate = id => {

    }

    const navigate = useNavigate()


    return (
        <div>

            <div className='card'>
                <img src={image} alt="" />
                <h1>{name.slice(0, 30)}</h1>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <button onClick={() => navigate(`/laptop/${_id}`)}>Update</button>
            </div>

        </div>
    );
};

export default Card;