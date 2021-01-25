import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext, useAuthState } from "../../context/AuthContext";

//const endpointLink = 'https://polar-lake-14365.herokuapp.com/api/auth/signin';

export default function IndexSignInForm(){
    // hook-form input
    const { register, handleSubmit, errors } = useForm();
    // context functies
    const { login } = useContext(AuthContext);
   const { isAuthenticated } = useAuthState();

    // gebruiker feedback
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    // router history
    const history = useHistory();

    // telkens als isAuthenticated uit de context veranderd wordt ie gererenderd.
    useEffect(() => {
        if (isAuthenticated === true) {
            history.push('/profile');
        }
    }, [isAuthenticated]);

    async function onSubmit(data) {
        toggleLoading(true);
        setError('');
        console.log(data);

        try {
            const response = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signin', {
                username: data.username,
                password: data.password,
            })
            login(response.data);

        }  catch (e) {
            console.error(e);
            //if (e.message.includes('400')) {
            //    setError('An account is already known with this username');
            //} else {
                setError('Something went wrong, try again');
            //}
        }
        toggleLoading(false);
    }

    //console.log("Errors:", errors);

    return <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
            Username</label>
        <input
            name="username"
            type="text"
            ref={register({ required: true})}
        />
        {errors.username && <span>This field is required</span>}
        <label htmlFor="password">
            Password</label>
        <input
            name="password"
            type="password"
            ref={register({ required: true})}
        />
        {errors.password && <span>This field is required</span>}
        <button
            type="submit"
            className="form-button"
            disabled={loading}
        >
            {loading ? "Loading..." : "create an account"}
        </button>
        {error && <p>{error}</p>}
    </form>
    </>
}