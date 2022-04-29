/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {

    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    };
    wasExpensive() { return this.budget > 100000000 ? true : false }

}

const movie365Days = new Movie("365 Days", "Greatest creators", 100000000000)

const movieHarryPotter = new Movie("Harry Potter", "some guys", 999999 )

console.log(movie365Days.wasExpensive())
console.log(movieHarryPotter.wasExpensive())