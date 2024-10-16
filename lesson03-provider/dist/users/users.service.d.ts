export declare class UsersService {
    private users;
    findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: number): {
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
    update(id: number, updateUser: {
        name?: string;
        email?: string;
        role?: 'INTERN' | 'ADMIN' | 'ENGINEER';
    }): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    delete(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
