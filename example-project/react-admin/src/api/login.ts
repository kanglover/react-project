export interface LoginParams {
    username: string;
    password: string;
}

export function login(params: LoginParams) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: '1234567890',
                name: 'admin',
            });
        }, 1000);
    })
}