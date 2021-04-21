
class ActorModel {
    constructor(firstName, lastName, birthday, image ,imdbLink) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.image = image;
        this.imdbLink = imdbLink;
    }

    age() {
        var ageDifMs = Date.now() - Date.parse(this.birthday);
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

}

export default ActorModel;