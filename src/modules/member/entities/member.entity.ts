import { Column, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Outfit } from "../../outfits/entities/outfit.entity.js";
import { Media } from "../../media/entities/media.entity.js";
import { Highlight } from "../../highlights/entities/highlight.entity.js";

/**
 *  Represents a member entity in the application.
 */
export class Member {

    /** The unique identifier for the member. */
    @PrimaryGeneratedColumn()
    memberId: number;

    /** The name of the member. */
    @Column()
    name: string;

    /** The stage name of the member. */
    @Column()
    stageName: string;

    /** The outfits associated with the member. */
    @OneToMany(() => Outfit, (outfit) => outfit.member)
    outfits: Outfit[];

    /** The highlights associated with the member. */
    @ManyToMany(() => Highlight, (highlight) => highlight.members)
    highlights: Highlight[];

    /** The media associated with the member. */
    @ManyToMany(() => Media, (media) => media.members)
    media: Media[];

}
