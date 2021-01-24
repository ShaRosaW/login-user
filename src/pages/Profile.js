import React from 'react'
import {Link} from "react-router-dom";
import {useAuthState} from "../context/AuthContext";

export default function Profile(){
    const { user } = useAuthState();

    return (
        <>
            <h2>Profile Page</h2>
            {user && (
                <>
                <p>Username:{user.username}</p>
                <p>Email:{user.email}</p>
                </>
            )}

            <p>Back to <Link to="/">Home</Link></p>
        </>
    );
}