import React from "react";

import { Card, Button, Image } from "semantic-ui-react";

import styles from "./styles.css";

export const Welcome = () => (
    <div className="welcomePage">
        <Card>
            <Image
                src="https://media.giphy.com/media/NWg7M1VlT101W/giphy.gif"
                wrapped
                ui={false}
            />
            <Card.Content>
                <Button
                    onClick={() => {
                        alert("go to sleeeeep");
                    }}
                >
                    Sheeeila
                </Button>
            </Card.Content>
        </Card>
    </div>
);

export default Welcome;
