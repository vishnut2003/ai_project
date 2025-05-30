import { NoUserInfo, UserInfo } from "@workos-inc/authkit-nextjs/dist/esm/interfaces";
import axios from "axios";

export function authVerify() {
    return new Promise<UserInfo | NoUserInfo>((resolve) => {
        axios.get('/api/auth/verify')
            .then((res) => {
                const userInfo: UserInfo | NoUserInfo = res.data;
                resolve(userInfo);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

export function authSignupUrl () {
    return new Promise<string>((resolve) => {
        axios.get('/api/auth/get-signup-url')
            .then((res) => {
                const signupUrl: string = res.data;
                resolve(signupUrl);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}

export function authSigninUrl () {
    return new Promise<string>((resolve) => {
        axios.get('/api/auth/get-signin-url')
            .then((res) => {
                const signinUrl: string = res.data;
                resolve(signinUrl);
            })
            .catch((err) => {
                console.log(err);
            })
    })
}