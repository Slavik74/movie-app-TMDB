
class MovieModel {
    constructor(id, release_date, name, length, director, poster ,plot, stars) {
        this.id = id;
        this.name = name;
        this.length = length;
        this.director = director;
        this.poster = "https://image.tmdb.org/t/p/w500" + poster;
        this.plot = plot;
        this.stars = stars;        
        this.release_date = release_date;
    }

    release_year(){
        const rdate = new Date(this.release_date)
        return rdate.getFullYear();
    }
    
}

export default MovieModel;