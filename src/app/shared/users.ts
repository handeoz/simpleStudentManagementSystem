import { User } from './user';
import { COURSES} from './courses';

export const USERS: User[] = [
    {
        id: 'A',
        username: 'Admin',
        password: '123',
        usertype: 'admin',
        image: '/assets/images/admin.png',
        isLoggedIn: false,
        courses: [],
        grades: []
    },
    {
        id: 'S0',
        username: 'Test_student',
        password: 'test_password',
        usertype: 'student',
        image: '/assets/images/f_avatar.jpg',
        isLoggedIn: false,
        courses: [COURSES[0], COURSES[7]],
        grades: ['DD', 'CB']
    },
    {
        id: 'S1',
        username: 'Erdinc',
        password: 'pass_milano',
        usertype: 'student',
        image: '/assets/images/m_avatar.jpg',
        isLoggedIn: false,
        courses: [COURSES[0], COURSES[5]],
        grades: ['BA', 'BB']
    },
    {
        id: 'S2',
        username: 'Baris',
        password: 'meinpasswort',
        usertype: 'student',
        image: '/assets/images/m_avatar.jpg',
        isLoggedIn: false,
        courses: [COURSES[2], COURSES[3], COURSES[4]],
        grades: ['BA', 'AA', 'AA']
    },
    {
        id: 'S3',
        username: 'Hamide',
        password: 'taskisla_pass',
        usertype: 'student',
        image: '/assets/images/f_avatar.png',
        isLoggedIn: false,
        courses: [COURSES[0], COURSES[2], COURSES[4]],
        grades: ['BA', 'BB', 'AA']
    },
    {
        id: 'S4',
        username: 'Berk',
        password: 'izmir2020',
        usertype: 'student',
        image: '/assets/images/m_avatar.jpg',
        isLoggedIn: false,
        courses: [COURSES[1], COURSES[3], COURSES[4]],
        grades: ['BA', 'CC', 'BB']
    },
    {
        id: 'S5',
        username: 'Hande',
        password: '123456',
        usertype: 'student',
        image: '/assets/images/f_avatar.png',
        isLoggedIn: false,
        courses: [COURSES[0], COURSES[5], COURSES[6]],
        grades: ['CC', 'DD', 'BB']
    },
    {
        id: 'P0',
        username: 'Test_professor',
        password: 'test_password',
        usertype: 'professor',
        image: '/assets/images/m_avatar.png',
        isLoggedIn: false,
        courses: [COURSES[7]],
        grades: []
    },
    {
        id: 'P1',
        username: 'Badur',
        password: 'p4ssw0rd',
        usertype: 'professor',
        image: '/assets/images/m_avatar.png',
        isLoggedIn: false,
        courses: [COURSES[3], COURSES[5]],
        grades: []
    },
    {
        id: 'P2',
        username: 'Tukel',
        password: 'ec0npass',
        usertype: 'professor',
        image: '/assets/images/m_avatar.png',
        isLoggedIn: false,
        courses: [COURSES[0], COURSES[1]],
        grades: []
    },
    {
        id: 'P3',
        username: 'Birgul',
        password: '123456',
        usertype: 'professor',
        image: '/assets/images/f_avatar2.png',
        isLoggedIn: false,
        courses: [COURSES[4]],
        grades: []
    },
    {
        id: 'P4',
        username: 'Guryay',
        password: '123cyber',
        usertype: 'professor',
        image: '/assets/images/m_avatar.png',
        isLoggedIn: false,
        courses: [COURSES[6]],
        grades: []
    },
    {
        id: 'P5',
        username: 'Dogerlioglu',
        password: 'pass_test',
        usertype: 'professor',
        image: '/assets/images/f_avatar2.png',
        isLoggedIn: false,
        courses: [COURSES[2], COURSES[7]],
        grades: []
    }
];
