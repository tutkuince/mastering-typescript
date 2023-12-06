const describePerson = (person: {
    name: string;
    age: number;
    parentNames: {
        mom: string;
        dad: string;
    }
}): string => {
    return `Person: ${person.name},
    Age: ${person.age},
    parents: ${person.parentNames.mom}, ${person.parentNames.dad}.`;
}

const result: string = describePerson({name: 'Okan', age: 45, parentNames: {mom: 'Buse', dad: 'Fatih'}});
console.log(result);

type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: {
        producer: string;
        writer: string
    }
}

const printSong = (song: Song): string => {
    return `Title: ${song.title}, Artist: ${song.artist}, Number of Streams: ${song.numStreams}
            Credits => Producer: ${song.credits.producer}, Writer: ${song.credits.writer}`;
}

const calculatePayout = (song: Song): number => {
    return song.numStreams * 0.0033;
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 123123,
    credits: {producer: "Phil Spector", writer: "Alex North"}
};

const printSongResult: string = printSong(mySong);
console.log(printSongResult);
console.log("---------------------------")
const calculatePayoutResult = calculatePayout(mySong);
console.log(calculatePayoutResult);