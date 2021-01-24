import React from 'react'
import {Link} from "react-router-dom";
import {useAuthState} from "../context/AuthContext";

export default function Home(){
    const { isAuthenticated } = useAuthState();
    console.log(isAuthenticated);

    return (
        <>
            <h2>Home</h2>
                <p>Want to know more <Link to="/about">about</Link> this page?</p>
                <p>Want to <Link to="/signup">sign up</Link> as a new member?</p>
                <p>Want to <Link to="/signin">sign in</Link> to your account?</p>
                <p>Signed in already? Go to your<Link to="/profile"> profile page</Link></p>
        </>
    );
}
