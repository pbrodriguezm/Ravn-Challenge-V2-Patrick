export class Person {
    public id: String
    public name: String
    public birthYear?: String
    public eyeColor?: String
    public gender?: String      //The gender of this person. Either "Male", "Female" or "unknown", "n/a" if the person does not have a gender.
    public hairColor?: String    //The hair color of this person. Will be "unknown" if not known or "n/a" if the person does not have hair.
    public created?: String
}
