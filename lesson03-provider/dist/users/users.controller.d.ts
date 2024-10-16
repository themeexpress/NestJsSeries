import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: string): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    create(user: {
        name: string;
        email: string;
        role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    }): {
        name: string;
        email: string;
        role: "INTERN" | "ADMIN" | "ENGINEER";
        id: number;
    };
    update(id: string, userUpdate: {
        name?: string;
        email?: string;
        role?: 'INTERN' | 'ADMIN' | 'ENGINEER';
    }): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    delete(id: string): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
