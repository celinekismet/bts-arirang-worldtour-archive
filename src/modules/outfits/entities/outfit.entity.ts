import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Event } from "../../events/entities/event.entity.js";
import { Member } from "../../member/entities/member.entity.js";

/**
 * Represents an outfit entity in the application.
 */
@Entity()
export class Outfit {

    /** The unique identifier for the outfit. */
    @PrimaryGeneratedColumn()
    outfitId: number;

    /** The name of the outfit. */
    @Column()
    name: string;

    /** The description of the outfit. */
    @Column()
    description: string;

    /** The designer of the outfit. */
    @Column()
    designer: string;

    /** The events associated with the outfit. */
    @ManyToMany(() => Event, (event) => event.outfits)
    @JoinTable()
    events: Event[];

    /** The member associated with the outfit. */
    @ManyToOne(() => Member, (member) => member.outfits)
    member: Member;
}
