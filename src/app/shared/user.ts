import { Course } from './course';

export class User {
    id: string;
    username: string;
    password: string;
    usertype: string;
    isLoggedIn: boolean;
    courses: Course[];
    grades?: String[];
    image?: string;

    constructor() {
        this.id = '';
        this.username = '';
        this.password = '';
        this.isLoggedIn = false;
        this.courses = [];
        this.grades = [];
        this.image = '';
    }
}


export const UserType = ['Professor', 'Student'];
export const GRADES = ['AA', 'BA', 'BB', 'CB', 'CC', 'DC', 'DD'];
