import { Login } from 'api';

class Login$1 {
    constructor() {
        this.username = "";
        this.password = "";
    }
    async execute() {
        const api = new Login(this.username, this.password);
        console.log("api----", api);
        const token = await api.response;
        console.log("core----", token);
        return token;
    }
}

export { Login$1 as Login };
