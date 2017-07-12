import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';
import { myConfig } from './auth.config';
import { WebAuth } from 'auth0-js'
// import { auth0 } from 'auth0-lock';


// Avoid name not found warnings
declare var auth0: any;
// let auth0 = require('auth0-lock').default;

@Injectable()
export class Auth {
    requestedScopes: string = 'profile list:storeItems';
    // Configure Auth0
    auth0 = new WebAuth({
        domain: myConfig.domain,
        clientID: myConfig.clientID,
        redirectUri: myConfig.callbackURL,
        responseType: 'token id_token',
         audience: 'https://localmt/',
        scope: 'profile list:storeItems'
    });

    constructor(private router: Router) {
    }

    public handleAuthentication(): void {
        this.auth0.parseHash({ _idTokenVerification: false }, (err, authResult) => {
            if (err) {
                alert('Error: ' + err.errorDescription)
            }
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                this.setSession(authResult);
                this.router.navigate(['/home']);
            }
        });
    }

    public login(username: string, password: string): void {
        this.auth0.redirect.loginWithCredentials({
            connection: 'Username-Password-Authentication',
            username,
            password
        }, err => {
            if (err) return alert(err.description);
        });
    }

    public signup(email, password): void {
        this.auth0.redirect.signupAndLogin({
            connection: 'Username-Password-Authentication',
            email,
            password,
        }, err => {
            if (err) return alert(err.description);
        });
    }

    public loginWithGoogle(): void {
        this.auth0.authorize({
            connection: 'google-oauth2',
        });
    }

    public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('scopes');
        // Go back to the home route
        this.router.navigate(['/']);
    }

    private setSession(authResult): void {
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        const scopes = authResult.scope || this.requestedScopes || '';
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('scopes', JSON.stringify(scopes));
    }

    public userHasScopes(scopes: Array<string>): boolean {
        const grantedScopes = JSON.parse(localStorage.getItem('scopes')).split(' ');
        return scopes.every(scope => grantedScopes.includes(scope));
    }
}