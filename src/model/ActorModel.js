
class ActorModel {
    constructor(tmdbId, firstName, lastName, birthDate, deathDate, image ,imdbLink) {
        this.tmdbId = tmdbId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.deathDate = deathDate;
        this.image = image;
        this.imdbLink = imdbLink;
    }

    age() {
        const dDate = !!this.deathDate ? Date.parse(this.deathDate) : Date.now();
        const ageDate = new Date(dDate - Date.parse(this.birthDate));
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    died() {
        return this.deathDate;
    }

}

export default ActorModel;