import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout';
import { Students } from './pages/students/students';
import { StudentDetails } from './pages/students/student-details/student-details';

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
                path: 'students/:id',
                component: StudentDetails,
            },
        ],
    },
    {
        path: '**',
        redirectTo: '',
    },
];