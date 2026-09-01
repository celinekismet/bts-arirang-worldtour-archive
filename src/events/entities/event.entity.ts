import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { HitTweet } from "../../hit-tweets/entities/hit-tweet.entity.js";
import { Media } from "../../media/entities/media.entity.js";
import { Outfit } from "../../outfits/entities/outfit.entity.js";

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

    @OneToMany(() => Media, (media) => media.event, { cascade: true })
    media: Media[];

    @OneToMany(() => Outfit, (outfit) => outfit.event, { cascade: true })
    outfit: Outfit[];

    @OneToMany(() => Highlight, (highlight) => highlight.event, { cascade: true })
    highlight: Highlight[];

    @OneToMany(() => HitTweet, (tweet) => tweet.event, { cascade: true })
    tweets: HitTweet[];
}
