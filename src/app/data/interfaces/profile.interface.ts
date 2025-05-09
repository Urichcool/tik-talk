export interface Profile {
    id:number
    username: string
    avatarUrl: null | string
    subscribersAmount: number
    firstName: string
    lastName:string
    isActive:boolean
    stack:string[]
    city:string
    description: string
}