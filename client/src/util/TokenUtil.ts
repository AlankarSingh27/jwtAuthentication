

import {  Cookies } from 'react-cookie';

const cookies = new Cookies();

export class TokenUtil {

    public static saveToken(token: string) {
        cookies.set('jwtToken', token, { path: '/' });
    }

    public static getToken() {
        return cookies.get('jwtToken');
    }

    public static deleteToken() {
        cookies.remove('jwtToken', { path: '/' });
    }

    public static isLoggedIn() {
        const token = cookies.get('jwtToken');
        return !!token;
    }
}
