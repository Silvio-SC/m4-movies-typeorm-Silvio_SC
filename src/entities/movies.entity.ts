import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies')
class Movie {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ length: 50, unique: true})
    name: string;

    @Column({ type:'text' , nullable: true })
    description: string | null | undefined;

    @Column()
    duration: number;
    
    @Column()
    price: number;
}

export default Movie;
// id: inteiro, sequencial e chave primária.
// name: string, tamanho máximo de 50, único e obrigatório.
// description: texto.
// duration: inteiro e obrigatório.
// price: inteiro e obrigatório.