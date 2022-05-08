import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const MyIteamCard = ({ myItem, handleDelete }) => {
    const { name, price, image, _id, quantity } = myItem;
    const navigate = useNavigate()
    return (
        <div className=' col-lg-3 col-md-6 col-sm-12'>
            <Card className='mb-2 mt-2' style={{ width: '18rem' }} >
                <img src={image} class="card-img-top" alt="..." />
                <Card.Body>
                    <Card.Title>Name:{name.slice(0, 30)}..</Card.Title>
                    <Card.Text>
                        <p>Price:{price}</p>
                        <p>Quantity:{quantity}</p>
                    </Card.Text>
                    <button className='me-5' onClick={() => handleDelete(_id)}>Delete</button>
                    <button onClick={() => navigate(`/laptop/${_id}`)}>Update</button>

                </Card.Body>
            </Card>



        </div>
    );
};

export default MyIteamCard;