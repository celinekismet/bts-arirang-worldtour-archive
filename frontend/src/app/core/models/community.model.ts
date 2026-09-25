import { CommunityCategories } from "../enum/CommunityCategories.enum";

export interface CommunityDto {
    communityId: number;
    name: string;
    description: string;
    category: CommunityCategories;
    platforms: string[];
    links: string[];
}