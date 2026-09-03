import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Media } from "../../media/entities/media.entity.js";
import { Event } from "../../events/entities/event.entity.js";
import { HitTweet } from "../../hit-tweets/entities/hit-tweet.entity.js";
import { Member } from "../../member/entities/member.entity.js";

/**
 * Represents a highlight entity.
 */
@Entity()
export class Highlight {
    
    /** The unique identifier for the highlight. */
    @PrimaryGeneratedColumn()
    highlightId: number;

    /** The title of the highlight. */
    @Column()
    title: string;

    /** The description of the highlight. */
    @Column()
    description: string;

    /** The media associated with the highlight. */
    @ManyToMany(() => Media, (media) => media.highlights, {
        cascade: true,
    })
    @JoinTable()
    media: Media[];

    /** The event associated with the highlight. */
    @ManyToOne(() => Event, (event) => event.highlights, { onDelete: 'CASCADE' })
    event: Event;

    /** The hit tweets associated with the highlight. */
    @OneToMany(() => HitTweet, (tweet) => tweet.highlight, { cascade: true })
    tweets: HitTweet[];

    /** The member associated with the highlight. This field is optional and can be null. */
    @ManyToMany(() => Member, (member) => member.highlights)
    @JoinTable()
    members: Member[];

}
