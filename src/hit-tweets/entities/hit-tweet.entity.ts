import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity()
export class HitTweet {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    tweetId: string;

    @Column()
    content: string;

    @Column()
    note: string;

    @ManyToOne(() => Event, (event) => event.tweets, { onDelete: 'CASCADE' })
    event: Event;
}
