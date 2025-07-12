import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout';
import { Students } from './pages/students/students';
import { StudentDetails } from './pages/students/student-details/student-details';
import { Contact } from './pages/students/student-details/contact/contact';
import { Notes } from './pages/students/student-details/notes/notes';
import { Homework } from './pages/students/student-details/homework/homework';
import { Packages } from './pages/students/student-details/packages/packages';
import { Feedback } from './pages/students/student-details/feedback/feedback';
import { Payment } from './pages/students/student-details/payment/payment';
import { Info } from './pages/students/student-details/info/info';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: 'students',
                component: Students,
            },
            {
                path: 'student-details/:id',
                component: StudentDetails,
                children: [
                    {
                        path: 'info',
                        component: Info
                    },
                    {
                        path: 'notes',
                        component: Notes
                    },
                    {
                        path: 'contact',
                        component: Contact
                    },
                    {
                        path: 'homework',
                        component: Homework
                    },
                    {
                        path: 'packages',
                        component: Packages
                    },
                    {
                        path: 'feedback',
                        component: Feedback
                    },
                    {
                        path: 'payments',
                        component: Payment
                    }
                ]
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];