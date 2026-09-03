import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "../../events/entities/event.entity.js";
import { Highlight } from "../../highlights/entities/highlight.entity.js";
import { Member } from "../../member/entities/member.entity.js";
import { MediaType } from "../../../config/config/enum/MediaType.enum.js";

/**
 * Represents a media entity in the application.
 */
@Entity()
export class Media {

    /** The unique identifier for the media. */
    @PrimaryGeneratedColumn('uuid')
    id: string;

    /** The URL of the media. This field is optional and can be null. */
    @Column({ nullable: true})
    url: string;
    
    /** The type of the media. */
    @Column({ type: 'enum', enum: MediaType })
    type: MediaType;

    /** The description of the media. */
    @Column()
    description: string;

    /** The credit information for the media. */
    @Column()
    credit: string;

    /** A note about the media. */
    @Column({ nullable: true })
    note: string;

    /** The event associated with the media. */
    @ManyToOne(() => Event, (event) => event.media, { onDelete: 'CASCADE' })
    event: Event;

    /** The highlights associated with the media. */
    @ManyToMany(() => Highlight, (highlight) => highlight.media)
    highlights: Highlight[];

    @ManyToMany(() => Member, (member) => member.media)
    members: Member[];
}
