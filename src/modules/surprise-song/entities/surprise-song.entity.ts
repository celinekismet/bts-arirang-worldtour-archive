import { Column, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "../../events/entities/event.entity.js";
import { Location } from "../../location/entities/location.entity.js";

/**
 * Represents a surprise song entity in the application.
 */
export class SurpriseSong {

    /** The unique identifier for the surprise song. */
    @PrimaryGeneratedColumn()
    surpriseSongId: number;

    /** The album to which the surprise song belongs. */
    @Column("simple-array")
    album: string[];

    /** The title of the surprise song. */
    @Column("simple-array")
    title: string[];

    /** The release date of the surprise song. */
    @Column()
    releaseDate: Date;

    /** The events associated with the surprise song. */
    @ManyToMany(() => Event, (event) => event.surpriseSongs)
    events: Event[];

    /** The locations associated with the surprise song. */
    @ManyToMany(() => Location, (location) => location.surpriseSongs)
    locations: Location[];
}
