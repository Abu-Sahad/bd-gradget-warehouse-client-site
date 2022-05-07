import React from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';


let errorElement

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const agree = event.target.terms.checked;
        if (agree) {
            await createUserWithEmailAndPassword(email, password)
        }

        await updateProfile({ displayName: name });
        toast('verification email')
        if (user) {
            navigate('/home');
        }


    }
    const navigateLogin = () => {
        navigate('/login');
    }

    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-primary text-center mt-2'>Please Enter Your Registration </h1>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check name='terms' type="checkbox" label="Accept Terms And Condition" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errorElement}
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Register;