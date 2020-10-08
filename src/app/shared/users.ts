import { User } from './user';
import { COURSES} from './courses';

export const USERS: User[] = [
    {
        id: 'A',
        username: 'Admin',
        password: '123',
        usertype: 'admin',
        courses: [],
        grades: []
    },
    {
        id: 'S0',
        username: 'Test_student',
        password: 'test_password',
        usertype: 'student',
        courses: [COURSES[0], COURSES[7]],
        grades: ['DD', 'CB']
    },
    {
        id: 'S1',
        username: 'Erdinc',
        password: 'pass_milano',
        usertype: 'student',
        courses: [COURSES[0], COURSES[5], COURSES[6]],
        grades: ['BA', 'BB', 'DD']
    },
    {
        id: 'S2',
        username: 'Baris',
        password: 'meinpasswort',
        usertype: 'student',
        courses: [COURSES[2], COURSES[3], COURSES[4]],
        grades: ['BA', 'AA', 'AA']
    },
    {
        id: 'S3',
        username: 'Hamide',
        password: 'taskisla_pass',
        usertype: 'student',
        courses: [COURSES[0], COURSES[2], COURSES[4], COURSES[6]],
        grades: ['BA', 'BB', 'AA', 'CC']
    },
    {
        id: 'S4',
        username: 'Berk',
        password: 'izmir2020',
        usertype: 'student',
        courses: [COURSES[1], COURSES[3], COURSES[4]],
        grades: ['BA', 'CC', 'BB']
    },
    {
        id: 'S5',
        username: 'Hande',
        password: '123456',
        usertype: 'student',
        courses: [COURSES[0], COURSES[5], COURSES[6]],
        grades: ['CC', 'DD', 'BB']
    },
    {
        id: 'P0',
        username: 'Test_professor',
        password: 'test_password',
        usertype: 'professor',
        courses: [COURSES[7]],
        grades: []
    },
    {
        id: 'P1',
        username: 'Badur',
        password: 'p4ssw0rd',
        usertype: 'professor',
        courses: [COURSES[3], COURSES[5]],
        grades: []
    },
    {
        id: 'P2',
        username: 'Tukel',
        password: 'ec0npass',
        usertype: 'professor',
        courses: [COURSES[0], COURSES[1]],
        grades: []
    },
    {
        id: 'P3',
        username: 'Birgul',
        password: '123456',
        usertype: 'professor',
        courses: [COURSES[4]],
        grades: []
    },
    {
        id: 'P4',
        username: 'Guryay',
        password: '123cyber',
        usertype: 'professor',
        courses: [COURSES[6]],
        grades: []
    },
    {
        id: 'P5',
        username: 'Dogerlioglu',
        password: 'pass_test',
        usertype: 'professor',
        courses: [COURSES[2], COURSES[7]],
        grades: []
    }
];
