import React from 'react'
import {Link} from "react-router-dom";

export default function About(){
    return (
        <>
        <h2>Profile Page</h2>
        <p>Back to <Link to="/"> Home</Link></p>
        </>
    )
}