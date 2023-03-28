import React,{ useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";

const GoogleSingleSignOn = () => {
    const google = window.google;
    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential)
        console.log(userObject, "ishh");
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }
    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "823834211204-nnaucmn8kanla5pv8f6oukdh5b10mvr4.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large" }
        );

        google.account?.id.prompt();

    }, []);


    return (
        <div>
            <div id="signInDiv"></div>
            {Object.keys(user).length !== 0 && <button onClick={(e) => handleSignOut(e)}>Sign Out</button>}

            {user &&
                <div>
                    <img src={user.picture}></img>
                    <h3>{user.name}</h3>
                </div>
            }
        </div>
    )
}

export default GoogleSingleSignOn