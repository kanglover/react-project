import axios from 'axios';

interface UserData {
    email: string;
    password: string;
}

export const login = ({ email, password }: UserData) =>
    axios.post('/sessions', { email, password });
export const signUp = ({ email, password }: UserData) =>
    axios.post('/users', { email, password });
export const logOut = () => axios.delete('/sessions');
