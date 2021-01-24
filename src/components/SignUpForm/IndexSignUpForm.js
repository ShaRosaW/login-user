import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";

export default function IndexSignUpForm(){
    // hook-form input
    const { register, handleSubmit, errors } = useForm();

    // gebruikerfeedback
    const [createUserSuccess, setCreateUserSuccess] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState('');

    async function onSubmit(data){
        toggleLoading(true);
        setError('');
        console.log(data);

        try {
            const response = await axios.post('https://polar-lake-14365.herokuapp.com/api/auth/signup', {
                username: data.username,
                email: data.email,
                password: data.password,
                role: ["user"],
            });
            //Kijk goed wat je terugkrijgt!
            console.log(response.data);

            if (response.status === 200) {
                // als sign up is gelukt in dit component opslaan
                setCreateUserSuccess(true);
            }

        } catch (e) {
            console.error(e);
            if (e.message.includes('400')) {
                setError('An account is already known with this username');
            } else {
                setError('Something went wrong, try again');
            }
        }
        toggleLoading(false);
    }


    //console.log("Errors:", errors);
    return (
        <>
        <h2>Sign Up</h2>
        {createUserSuccess === true && (
            <h2 className="message-success">
                You successfully signed up! You can sign in
                <Link to="/signin">here.</Link>
            </h2>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email-field">
            Email:
        <input
            name="email-field"
            type="email"
            ref={register({required: true})}
        />
        {errors.email && <span>This field is required</span>}
        </label>
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
    );
}


