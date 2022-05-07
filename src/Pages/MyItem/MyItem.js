import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItem = () => {
    const [myItems,setMyItems] = useState([])
    const [user] = useAuthState(auth)
    const email = user?.email
    useEffect(()=>{
        fetch(`http://localhost:5000/myItems?email=${email}`)
        .then(res => res.json())
        .then(data => setMyItems(data))
    },[email])
    return (
        <div>
           <h1>{myItems.length}</h1>
        </div>
    );
};

export default MyItem;