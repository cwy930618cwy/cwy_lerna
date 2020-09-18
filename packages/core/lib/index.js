import { Login } from 'api';
import { Authentication } from 'data';

class Login$1 {
    constructor() {
        this.username = "";
        this.password = "";
    }
    async execute() {
        const api = new Login(this.username, this.password);
        const { token } = await api.response;
        Authentication.saveToken(token);
        return token;
    }
}

export { Login$1 as Login };
