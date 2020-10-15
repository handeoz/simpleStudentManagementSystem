import { Course } from './course';
import { Injectable } from '@angular/core';
@Injectable()
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


export const UserType = ['professor', 'student'];
/*export enum GRADES {
    AA = 'AA',
    BA = 'BA',
    BB = 'BB',
    CB = 'CB',
    CC = 'CC',
    DC = 'DC',
    DD = 'DD'
}*/

export const GRADES = ['null', 'AA', 'BA', 'BB', 'CB', 'CC', 'DC', 'DD'];
