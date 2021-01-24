import React from 'react'
import {Link} from "react-router-dom";
import IndexSignInForm from "../components/SignInForm/IndexSignInForm";


export default function SignIn(){
    return <>
        <h2>
            <p>Go back to <Link to="/">Home</Link></p>
            Sign In
            <IndexSignInForm/>
            <p>You don't have an account yet? <Link to="/signup">Sign up</Link> first.
            </p>
        </h2>
        </>
}