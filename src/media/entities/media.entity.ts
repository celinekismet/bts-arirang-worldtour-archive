import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { MediaType } from "../../config/config/enum/MediaType.enum.js";

@Entity()
export class Media {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true})
    url: string;
    
    @Column({ type: 'enum', enum: MediaType })
    type: MediaType;

    @Column()
    description: string;

    @Column()
    credit: string;

    @Column({ nullable: true })
    note: string;

    @ManyToOne(() => Event, (event) => event.media, { onDelete: 'CASCADE' })
    event: Event;
}
