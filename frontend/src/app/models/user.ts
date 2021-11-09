export class User{
    id: number;
    name: string;
    email: string;
    password: string;
    rol: string;

    constructor(id: number, name: string, email: string, password: string, rol: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
}