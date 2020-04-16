export interface UserModel {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    is_superuser: boolean;
    is_active: boolean;
    is_staff: boolean;
    date_created: string;
    last_login: string;
}
