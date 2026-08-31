import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Event {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'date'})
    date: Date;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    venue: string;

    @Column('simple-array', { nullable: true })
    setlist: string[];

    @Column('simple-array', { nullable: true })
    surpriseSongs: string[];

    @OneToMany(() => EventMedia, (eventMedia) => eventMedia.event, { cascade: true })
    media: EventMedia[];

    @OneToMany(() => Outfits, (outfits) => outfits.event, { cascade: true })
    outfits: Outfits[];

    @OneToMany(() => Highlights, (highlights) => highlights.event, { cascade: true })
    highlights: Highlights[];

    @OneToMany(() => HitTweets, (hitTweets) => hitTweets.event, { cascade: true })
    hitTweets: HitTweets[];
}
