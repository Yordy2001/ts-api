import cookieSession from "cookie-session";

export default cookieSession({
    name: 'session-ts-api',
    keys: ['key1'],
    signed: false,
    expires: new Date(Date.now() + 8 * 3600000)
})
