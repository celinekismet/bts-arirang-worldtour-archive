import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import type { Relation } from "typeorm";
import { Event } from "../../events/entities/event.entity.js";
import { Location } from "../../location/entities/location.entity.js";

/**
 * Represents a surprise song entity in the application.
 */
@Entity()
export class SurpriseSong {

    /** The unique identifier for the surprise song. */
    @PrimaryGeneratedColumn()
    surpriseSongId: number;

    /** The album to which the surprise song belongs. */
    @Column('text', { array: true })
    album: string[];

    /** The title of the surprise song. */
    @Column()
    title: string;

    /** The release date of the surprise song. */
    @Column({ type: 'date' })
    releaseDate: Date;

    /** The events associated with the surprise song. */
    @ManyToMany(() => Event, (event) => event.surpriseSongs)
    events: Relation<Event[]>;

    /** The locations associated with the surprise song. */
    @ManyToMany(() => Location, (location) => location.surpriseSongs)
    locations: Relation<Location[]>;
}
