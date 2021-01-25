import React, {useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {AuthContext, useAuthState} from "../context/AuthContext";

function Header() {
    const history = useHistory();
    const { isAuthenticated } = useAuthState();
    const { logout } = useContext(AuthContext);

    useEffect(() => {
    if (isAuthenticated === false) {
        history.push('/signin');
    }

    }, [isAuthenticated]);


    return (
        <>
            <div>
                {isAuthenticated ? (
                <button
                    type="button"
                    onClick={() => logout()}
                >
                    Log out
                </button>
                    ) : (
                <>
                <button
                    type="button"
                    onClick={() => history.push('/signin')}
                >
                    Log in
                </button>
                <button
                    type="button"
                    onClick={() => history.push('/signup')}
                >
                    Sign Up
                </button>
                </>
                )}
            </div>
        </>
    );
}

export default Header;