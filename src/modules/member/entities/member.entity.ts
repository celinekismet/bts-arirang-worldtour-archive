import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import type { Relation } from "typeorm";
import { Outfit } from "../../outfits/entities/outfit.entity.js";
import { Media } from "../../media/entities/media.entity.js";
import { Highlight } from "../../highlights/entities/highlight.entity.js";

/**
 *  Represents a member entity in the application.
 */
@Entity()
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
    outfit: Relation<Outfit[]>;

    /** The highlights associated with the member. */
    @ManyToMany(() => Highlight, (highlight) => highlight.members)
    highlights: Relation<Highlight[]>;

    /** The media associated with the member. */
    @ManyToMany(() => Media, (media) => media.members)
    media: Relation<Media[]>;

}
