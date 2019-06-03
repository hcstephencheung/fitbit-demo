import React from "react";
import { Card, Button, Image } from "semantic-ui-react";

import styles from "./styles.css";

const ENDPOINT = "http://localhost:8888/auth";

export const Welcome = () => {
    const login = async () => {
        let response = await fetch(ENDPOINT);
    };

    return (
        <div className="welcomePage">
            <Card>
                <Image
                    src="https://media.giphy.com/media/NWg7M1VlT101W/giphy.gif"
                    wrapped
                    ui={false}
                />
                <Card.Content>
                    <a href={ENDPOINT}>Login to Fitbit</a>
                </Card.Content>
            </Card>
        </div>
    );
};

export default Welcome;
