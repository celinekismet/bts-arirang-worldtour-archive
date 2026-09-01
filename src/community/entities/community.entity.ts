import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommunityCategories } from "../../config/config/enum/CommunityCategories.enum.js";

@Entity()
export class Community {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;
    
    @Column()
    description: string;

    @Column({ type: 'enum', enum: CommunityCategories })
    category: CommunityCategories;

    @Column()
    platforms: string[];

    @Column()
    links: string[];

}
