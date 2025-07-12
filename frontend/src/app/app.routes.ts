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
import { Dashboard } from './pages/dashboard/dashboard';
import { Lessons } from './pages/lessons/lessons';
import { Calendar } from './pages/calendar/calendar';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard,
            },
            {
                path: 'students',
                component: Students,
            },
            {
                path: 'students/:id',
                component: StudentDetails,
                children: [
                    { path: '', redirectTo: 'info', pathMatch: 'full' },
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
            {
                path: 'lessons',
                component: Lessons,
            },
            {
                path: 'calendar',
                component: Calendar,
            },
            {
                path: 'feedback',
                component: Feedback,
            },
            {
                path: 'settings',
                component: Settings,
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];