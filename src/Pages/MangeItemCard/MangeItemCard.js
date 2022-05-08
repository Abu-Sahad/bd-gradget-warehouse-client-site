import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './ManageItemCard.css'

const MangeItemCard = ({ item, handleDelete }) => {
    const { image, name, quantity, price, description, _id } = item
    // useEffect(() => {
    //     document.body.style.background = "#faebd7";
    //   }, []);
    const navigate = useNavigate()

    return (
        <div className=' col-lg-3 col-md-6 col-sm-12'>
            <Card className='mb-2 mt-2' style={{ width: '18rem' }} >
                <img src={image} class="card-img-top" alt="..." />
                <Card.Body>
                    <Card.Title>Name:{name}</Card.Title>
                    <Card.Text>
                        <p>Price:{price}</p>
                        <p>Quantity:{quantity}</p>
                        <p>Description:{description.slice(0, 70)}...</p>
                    </Card.Text>
                    <button className='me-5' onClick={() => handleDelete(_id)}>Delete</button>
                    <button onClick={() => navigate(`/laptop/${_id}`)}>Update</button>
                </Card.Body>
            </Card>



        </div>
    );
};

export default MangeItemCard;