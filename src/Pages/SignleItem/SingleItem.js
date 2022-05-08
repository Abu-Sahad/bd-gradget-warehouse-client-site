import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleItem.css'

const SingleItem = () => {
    const [item, setItem] = useState({})
    const [updateQuantity, setUpdateQuantity] = useState(0)
    const [reload, setReload] = useState(false)
    const { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:5000/laptops/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [id, reload])

    const handleSubmit = (e) => {
        e.preventDefault()
        const quantity = e.target.quantity.value

        if (quantity < 0) {

            alert('Enter positive number')
            e.target.reset()
            return
        }
        else if (quantity == '') {
            alert('Invalid input')
            return
        }

        else {
            const updateQuantity = parseInt(item.quantity) + parseInt(quantity)
            const totalQuantity = { quantity: updateQuantity }

            fetch(`http://localhost:5000/laptop/${id}`
                , {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(totalQuantity)
                })
                .then(res => res.json())
                .then(() => {
                    setReload(!reload)
                    e.target.reset()
                    alert('Item added')
                })
        }
    }


    const handleDelever = () => {

        if (item.quantity > 0) {
            const updateQuantity = parseInt(item.quantity) - 1
            console.log(updateQuantity)
            const totalQuantity = { quantity: updateQuantity }
            fetch(`http://localhost:5000/laptop/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(totalQuantity)
            })
                .then(res => res.json())
                .then(() => {

                    setReload(!reload)
                    window.alert(' delevered seccessful')
                })
        }
        else {
            window.alert('Stock Out item')
        }

    }
    const { name, price, image, _id, supplierName, quantity } = item

    return (
        <div className='single-card-container mb-5'>

            <div className='single-card'>
                <img src={image} alt="" />
                <h1>{name}</h1>
                <p>{price}</p>
                <p>Quantity : {quantity}</p>
                <p> Supplier : {supplierName}</p>
                <p>ID : {_id}</p>

                <form onSubmit={handleSubmit}>
                    <input type="number" name='quantity' placeholder='Add quantity' /> <br />
                    <button className='mt-2 mb-2' type='submit'>Update  Quantity</button>

                </form>
                <button className='mb-5' onClick={handleDelever}>Delevered</button>
            </div>


        </div>
    );
};

export default SingleItem;