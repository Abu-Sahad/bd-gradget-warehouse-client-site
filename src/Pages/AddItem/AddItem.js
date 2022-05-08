import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css'
const AddItem = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        const image = e.target.image.value
        const description = e.target.description.value
        const supplierName = e.target.supplierName.value
        const item = { name, price, quantity, image, supplierName, description, email }

        fetch('https://nameless-bastion-91628.herokuapp.com/laptop', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                e.target.reset()
                alert('Item added')
            })
    }
    return (

        <div className='add-item-container'>

            <form className='add-item-form d-flex justify-content-center align-items-center' onSubmit={handleSubmit}>

                <div className="additemMain">
                    <input name='name' type="text" placeholder='Name' required />
                    <input name='price' type="number" placeholder='Price' required />
                    <input name='quantity' type="number" placeholder='Quantity' required />
                    <input name='image' type="text" placeholder='Image URL' required />
                    <input name='supplierName' type="text" placeholder='Supplier Name' required />
                    <textarea name="description" placeholder='Description' cols="30" rows="10" required></textarea>
                    <br />
                    <button type='submit'> Add Item</button>
                </div>
            </form>

        </div>
    );
};

export default AddItem;