import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "../../events/entities/event.entity.js";
import { SurpriseSong } from "../../surprise-song/entities/surprise-song.entity.js";

/**
 * Represents a location entity in the application.
 */
@Entity()
export class Location {

    /** The unique identifier for the location. */
    @PrimaryGeneratedColumn()
    locationId: number;
    
    /** The country where the location is situated. */
    @Column()
    country: string;

    /** The city where the location is situated. */
    @Column()
    city: string;

    /** The venue where the location is situated. */
    @Column()
    venue: string;

    /** The address of the location. */
    @Column()
    address: string;

    /** The events associated with the location. */
    @OneToMany(() => Event, (event) => event.location)
    events: Event[];

    /** The surprise songs associated with the location. */
    @ManyToMany(() => SurpriseSong, (surpriseSongs) => surpriseSongs.locations)
    surpriseSongs: SurpriseSong[];
}
