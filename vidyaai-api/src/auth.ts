const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import dotenv from "dotenv";
dotenv.config();

passport.serializeUser((user:any, done:any) => {
    done(null, user);
});

passport.deserializeUser((user:any, done:any) => {
    done(null, user);
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID+"",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET+"",
        callbackURL: `/auth/google/callback`
    }, (accessToken:any, refreshToken:any, profile:any, done:any) => {
        done(null, profile);
    })
);
