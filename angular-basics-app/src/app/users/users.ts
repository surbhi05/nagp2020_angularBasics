export class Users {
    constructor(
        public id: number = 0,
        public name: string = "",
        public email: string = "",
        public phoneNumber: string = "",
        public username: string = "",
        public age: number = 0,
        public salary: number = 0,
        public dob: Date = new Date()
    ) { }
}
