
export interface IItmes {
    items: IUser[],
    isLoading: boolean,
    error: string,
}

export interface IUser {
    id: string,
    avatarUrl: string,
    firstName: string,
    lastName: string,
    userTag: string,
    department: string,
    position: string,
    birthday: string,
    phone: string
}