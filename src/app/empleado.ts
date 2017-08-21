export class Empleado{
    id: number;
    name: string;
    username: string;    
    email: string;

    constructor(json?) {
        this.id = json && json.id;
        this.name = json && json.name;
        this.username = json && json.username;
        this.email = json && json.email;
      }
}