import { Column, Entity, ManyToMany, ManyToOne } from "typeorm";
import { Media } from "../../media/entities/media.entity.js";

@Entity()
export class Highlight {
    
    @Column()
    id: string;

    @Column()
    title: string;
    
    @Column()
    description: string;

    @ManyToMany(() => Media, { cascade: true })
    media: Media[];

    @ManyToOne(() => Event, (event) => event.highlights, { onDelete: 'CASCADE' })
    event: Event;
}
