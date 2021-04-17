
class ActorModel {
    constructor(firstName, lastName, birthday, image ,IMDBLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.image = image;
        this.IMDBLink = IMDBLink;
    }

    age() {
        var ageDifMs = Date.now() - Date.parse(this.birthday);
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

}

export default ActorModel;