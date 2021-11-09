import { Author } from "./author";

export class Book{
    id: number;
    name: string;
    author: string;
    genre: string;
    synopsis: string;
    stock: number;
    image: string;
    //fk_author: Author;
    fk_author: number;

    constructor(id: number, name: string, author: string, genre: string, synopsis: string, stock: number, image: string, fk_author: number){
        this.id = id;
        this.name = name;
        this.author = author;
        this.genre = genre;
        this.synopsis = synopsis;
        this.stock = stock;
        this.image = image;
        this.fk_author = fk_author;
    }
}