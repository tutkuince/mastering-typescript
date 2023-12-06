// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly

type Movie = {
    readonly title: string;
    originalTitle?: string;
    director: string;
    releaseYear: number;
    boxOffice: {
        budget: number;
        grossUs: number;
        grossWorldwide: number
    }
};

const dune: Movie = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 123123123312,
        grossUs: 123123123,
        grossWorldwide: 3451233
    }
}

const cats: Movie = {
    title: "Cats",
    director: "Tom Hooper",
    releaseYear: 2019,
    boxOffice: {
        budget: 87789978,
        grossUs: 789908987,
        grossWorldwide: 87907980798
    }
}

// const getProfit = (movie: Movie): number => {
//     return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
// }

// const getProfit = (movie: Movie): number => {
//     const {grossWorldwide, budget} = movie.boxOffice;
//     return grossWorldwide - budget;
// }

const getProfit = ({boxOffice: {grossWorldwide, budget}}: Movie):number => {
    return grossWorldwide - budget;
}
console.log(getProfit(dune));
console.log(getProfit(cats));