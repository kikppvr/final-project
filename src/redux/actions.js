
export const registerUser = (name, username, email) => ({
    type: 'REGISTER',
    payload: { name, username, email}
})