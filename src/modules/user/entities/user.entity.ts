// user/entities/user.entity.ts
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRole } from "../../../config/config/enum/UserRole.enum.js";


/**
 * Represents a user entity in the application.
 */
@Entity()
export class User {

    /** The unique identifier for the user. */
    @PrimaryGeneratedColumn()
    userId: number;

    /** The email of the user, used for login. */
    @Column({ unique: true })
    email: string;

    /** The hashed password of the user. Never expose this field in API responses. */
    @Column({ select: false })
    password: string;

    /** The display name of the user. */
    @Column()
    name: string;

    /** The role of the user. */
    @Column({ type: 'enum', enum: UserRole, default: UserRole.ADMIN })
    role: UserRole;

    /** The date the user account was created. */
    @CreateDateColumn()
    createdAt: Date;
}