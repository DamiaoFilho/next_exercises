declare interface IUser {
    id: number;
    name: string;
    email: string;
    age: number;
    role: 'admin' | 'user' | 'editor';
    city: string;
    country: string;
    active: boolean;
    createdAt: string; 
}