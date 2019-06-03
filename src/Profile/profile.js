import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const ENDPOINT = "http://localhost:8888/auth/callback";

export const Profile = props => {
    const callbackParams = props.location.search;
    useEffect(() => {
        const fetchToken = async () => {
            let response = await fetch(ENDPOINT + "?" + callbackParams);
            let data = await response.json();
            console.log(data);
            if (data.user) {
                props.history.push("/profile");
            }
        };

        fetchToken();
    });

    return <div className="profilePage">Hello World</div>;
};

export default Profile;
