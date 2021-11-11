export class Purchase{
    id: number;
    name_book: string;
    name_user: string;
    fk_user: string;

    constructor(id: number, name_book: string, name_user: string, fk_user: string){
        this.id = id;
        this.name_book = name_book;
        this.name_user = name_user;
        this.fk_user = fk_user;
    }
}