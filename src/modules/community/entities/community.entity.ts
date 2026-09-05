import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommunityCategories } from "../../../config/config/enum/CommunityCategories.enum.js";

@Entity()
export class Community {

    @PrimaryGeneratedColumn()
    communityId: number;

    @Column()
    name: string;
    
    @Column()
    description: string;

    @Column({ type: 'enum', enum: CommunityCategories })
    category: CommunityCategories;

    @Column('text', { array: true })
    platforms: string[];

    @Column('text', { array: true})
    links: string[];

}
