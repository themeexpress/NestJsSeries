export declare class UsersController {
    findAll(): {};
    findAllByQuery(role?: 'INTERNS' | 'ENGINEER' | 'ADMIN'): {};
    findOne(id: string): {
        id: string;
    };
    create(user: {}): {};
    update(id: string, userUpdate: {}): {
        id: string;
    };
    delete(id: string): {
        id: string;
    };
}
