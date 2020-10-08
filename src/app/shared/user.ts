import { Course } from './course';

export class User {
    id: string;
    username: string;
    password: string;
    usertype: string;
    courses: Course[];
    grades?: String[];

    constructor() {
        this.id = '';
        this.username = '';
        this.password = '';
        this.courses = [];
        this.grades = [];
    }
}


export const UserType = ['Professor', 'Student'];
export const GRADES = ['AA', 'BA', 'BB', 'CB', 'CC', 'DC', 'DD'];
