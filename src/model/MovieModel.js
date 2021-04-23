
class MovieModel {
    constructor(name, length, director, poster ,plot, stars) {
        this.name = name;
        this.length = length;
        this.director = director;
        this.poster = "https://image.tmdb.org/t/p/w500" + poster;
        this.plot = plot;
        this.stars = stars;        
    }
}

export default MovieModel;