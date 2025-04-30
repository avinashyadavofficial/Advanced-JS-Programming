// Build a Movie constructor exactly as described:
// Requirements:
// - Takes title, year, and rating
// - Stores them as properties
// - Has a method getSummary() on the prototype
// - getSummary returns: "MovieName (Year) has a rating of X"
function Movie(title,year,rating){
    this.title=title;
    this.year=year;
    this.rating=year;
}
Movie.prototype.getSummary=function(){
    return `${this.title} (${this.year}) has a rating of ${this.rating}`;
};
let a=new Movie("Dangal",2018,5);
console.log(a.getSummary());
let b=new Movie("ABCD",2019,4);
console.log(a.getSummary()==b.getSummary());//false
console.log(a.getSummary==b.getSummary);//true --> All Movie objects share the same getSummary function in memory.
console.log(a.getSummary);//[Function (anonymous)]
