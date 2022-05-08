import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyIteamCard from '../MyIteamCard/MyIteamCard';

const MyItem = () => {
    const [reload, setReLoad] = useState(false)
    const [myItems, setMyItems] = useState([])
    const [user] = useAuthState(auth)
    const email = user?.email
    useEffect(() => {
        fetch(`http://localhost:5000/myItems?email=${email}`)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [email])
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/laptop/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(() => {
                alert('Item Deleted')
                setReLoad(!reload)
            })
    }
    return (
        <div className='container'>
            <div className='row'>
                {
                    myItems.length ? myItems.map(myItem => <MyIteamCard key={MyItem._id} myItem={myItem} handleDelete={handleDelete} ></MyIteamCard>) : ''
                }
            </div>
        </div>
    );
};

export default MyItem;