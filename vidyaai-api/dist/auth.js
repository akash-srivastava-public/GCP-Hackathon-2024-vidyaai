"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID + "",
    clientSecret: process.env.GOOGLE_CLIENT_SECRET + "",
    callbackURL: `/auth/google/callback`
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile);
}));
