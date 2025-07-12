export interface Student {
    id: string;
    name: string;
    surname: string;
    email: string;
    phone: string;
    country: string;
    city: string;
    nationality: string;
    status: StudentStatus;
}

export enum StudentStatus {
    New = 'new',
    Active = 'active',
    Inactive = 'inactive',
    Pending = 'pending',
    Graduated = 'graduated',
    DroppedOut = 'droppedOut',
    Transferred = 'transferred',
    Suspended = 'suspended',
}

export const StudentStatusLookUp: Record<StudentStatus, string> = {
    [StudentStatus.New]: 'New',
    [StudentStatus.Active]: 'Active',
    [StudentStatus.Inactive]: 'Inactive',
    [StudentStatus.Pending]: 'Pending',
    [StudentStatus.Graduated]: 'Graduated',
    [StudentStatus.DroppedOut]: 'Dropped Out',
    [StudentStatus.Transferred]: 'Transferred',
    [StudentStatus.Suspended]: 'Suspended',
}
