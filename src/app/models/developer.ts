import { Skill } from "./skill";

export class Developer {
    lastName: string;
    firstName: string;
    age: number;
    bio: string;
    skills: Skill[];

    constructor(lastName: string, firstName: string, age: number, bio: string, skills: Skill[] ) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.age = age;
        this.bio = bio;
        this.skills = skills;
    }


}
