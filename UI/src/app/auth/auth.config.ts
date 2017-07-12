interface AuthConfiguration {
    clientID: string;
    domain: string;
    callbackURL: string;
}

export const myConfig: AuthConfiguration = {
    clientID: 'nGA9fC8snqOnXsJ6FnB6FB1G5oiVjdwR',
    domain: 'asd1531.eu.auth0.com',
    // You may need to change this!
    callbackURL: 'http://localhost:4200/'
};