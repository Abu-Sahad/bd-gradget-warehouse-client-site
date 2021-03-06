import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Card.css'

const Card = ({ item }) => {

    const { name, description, price, image, _id, supplierName, quantity } = item
    const navigate = useNavigate()


    return (
        <div>

            <div className='card'>
                <img src={image} alt="" />
                <h1>{name.slice(0, 30)}</h1>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <p>Supplier : {supplierName}</p>
                <p> description : {description.slice(0, 120)}....</p>
                <button onClick={() => navigate(`/laptop/${_id}`)}>Update</button>
            </div>

        </div>
    );
};

export default Card;