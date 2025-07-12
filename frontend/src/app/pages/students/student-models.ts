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

export enum MenuOption {
    Info = 1,
    Notes = 2,
    Contact = 3,
    Homework = 4,
    Packages = 5,
    Feedback = 6,
    Payments = 7,
    Operations = 8
}

export const MenuOptionsLookUp: Array<{ label: string; icon: string; value: MenuOption, route?: string }> = [
    { label: 'Info', icon: 'pi pi-info-circle', value: MenuOption.Info, route: 'info' },
    { label: 'Notes', icon: 'pi pi-file-edit', value: MenuOption.Notes, route: 'notes' },
    { label: 'Contact', icon: 'pi pi-phone', value: MenuOption.Contact, route: 'contact' },
    { label: 'Homework', icon: 'pi pi-book', value: MenuOption.Homework, route: 'homework' },
    { label: 'Packages', icon: 'pi pi-box', value: MenuOption.Packages, route: 'packages' },
    { label: 'Feedback', icon: 'pi pi-comment', value: MenuOption.Feedback, route: 'feedback' },
    { label: 'Payments', icon: 'pi pi-credit-card', value: MenuOption.Payments, route: 'payments' },
    { label: 'Operations', icon: 'pi pi-cog', value: MenuOption.Operations },

];