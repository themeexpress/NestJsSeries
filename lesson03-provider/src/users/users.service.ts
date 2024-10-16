import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com", role: "ADMIN" },
        { id: 2, name: "Bob Smith", email: "bob.smith@example.com", role: "ENGINEER" },
        { id: 3, name: "Charlie Brown", email: "charlie.brown@example.com", role: "INTERN" },
        { id: 4, name: "David Clark", email: "david.clark@example.com", role: "ENGINEER" },
        { id: 5, name: "Eve Adams", email: "eve.adams@example.com", role: "ADMIN" },
        { id: 6, name: "Frank Wright", email: "frank.wright@example.com", role: "INTERN" }
      ];

      findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER'){
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users
      }

      findOne(id: number){
        const user = this.users.find(user=>user.id === id);
        return user
      }

      create(user: {name: string, email: string, role: 'INTERN' | 
      'ADMIN' | 'ENGINEER'}){
        const usersByHighestId = [...this.users].sort((a,b) => b.id - a.id)
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUser);
        return newUser
      }

      update(id: number, updateUser: {name?: string, email?: string, 
        role?: 'INTERN' | 'ADMIN' | 'ENGINEER'}){
        this.users = this.users.map(user => {
            if (user.id == id) {
                return {...user, ...updateUser }
            }
            return user
        });

        return this.findOne(id);
      }

      delete(id: number){
        const removeUser = this.findOne(id);
        this.users = this.users.filter(user=> user.id !== id);
        return removeUser
      }
      
}
