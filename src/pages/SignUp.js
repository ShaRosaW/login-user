import React from 'react'
import IndexSignUpForm from "../components/SignUpForm/IndexSignUpForm";
import {Link} from "react-router-dom";

export default function SignUp(){
    return <>
        <h2>Sign Up
            <IndexSignUpForm />
            <p>Do you already have an account? You can <Link to="/signin">sign in</Link> here.</p>
        </h2>
    </>
}