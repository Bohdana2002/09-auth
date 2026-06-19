export interface User {
    email: string;
    username: string;
    avatar?: string;
}

//server creates a new account and gives us back the object of user