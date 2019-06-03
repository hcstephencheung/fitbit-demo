import ClientOAuth2 from "client-oauth2";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import {} from "dotenv/config";
import axios from "axios";

const allowedOrigins = "http://localhost:8888";

const stateKey = "playground_auth_state";
const acKey = "playground-ac-key";

const generateRandomString = length => {
    var text = "";
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};

const fitbitAuth = new ClientOAuth2({
    clientId: process.env.CLIENT_ID || "",
    clientSecret: process.env.CLIENT_SECRET || "",
    accessTokenUri: "https://api.fitbit.com/oauth2/token",
    authorizationUri: "https://www.fitbit.com/oauth2/authorize",
    redirectUri: "http://localhost:3000/auth/callback?code=123&state=abc",
    scopes: ["activity", "heartrate", "profile"],
});

const app = express();
app.use(cors({ origin: allowedOrigins }));

app.use(cors()).use(cookieParser());

app.get("/auth", (req, res) => {
    res.redirect(fitbitAuth.code.getUri());
});

app.get("/auth/callback", (req, res) => {
    fitbitAuth.code.getToken(req.originalUrl).then(function(user) {
        // Sign API requests on behalf of the current user.
        axios(
            user.sign({
                method: "get",
                url: "https://api.fitbit.com/1/user/-/profile.json",
            })
        )
            .then(profileRes => {
                res.status(200).send(profileRes.data);
            })
            .catch(e => {
                res.status(500).send(e);
            });
    });
});

console.log("Listening on 8888");
app.listen(8888);
