import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Event } from "../../events/entities/event.entity.js";
import { Highlight } from "../../highlights/entities/highlight.entity.js";


/**
 * Represents tweets entity in the application.
 */
@Entity()
export class HitTweet {

    /** The unique identifier for the tweet. */
    @PrimaryGeneratedColumn()
    hitTweetId: number;

    /** The content of the tweet. */
    @Column()
    content: string;

    /** A note about the tweet. */
    @Column()
    note: string;

    /** The event associated with the tweet. */
    @ManyToOne(() => Event, (event) => event.tweets, { onDelete: 'CASCADE' })
    event: Event;

    /** The highlight associated with the tweet. */
    @ManyToOne(() => Highlight, (highlight) => highlight.tweets, {
        nullable: true, 
        onDelete: 'CASCADE' 
    })
    highlight: Highlight;
}
