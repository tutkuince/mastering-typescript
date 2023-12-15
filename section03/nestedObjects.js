"use strict";
const describePerson = (person) => {
    return `Person: ${person.name},
    Age: ${person.age},
    parents: ${person.parentNames.mom}, ${person.parentNames.dad}.`;
};
const result = describePerson({ name: 'Okan', age: 45, parentNames: { mom: 'Buse', dad: 'Fatih' } });
console.log(result);
const printSong = (song) => {
    return `Title: ${song.title}, Artist: ${song.artist}, Number of Streams: ${song.numStreams}
            Credits => Producer: ${song.credits.producer}, Writer: ${song.credits.writer}`;
};
const calculatePayout = (song) => {
    return song.numStreams * 0.0033;
};
const mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 123123,
    credits: { producer: "Phil Spector", writer: "Alex North" }
};
const printSongResult = printSong(mySong);
console.log(printSongResult);
console.log("---------------------------");
const calculatePayoutResult = calculatePayout(mySong);
console.log(calculatePayoutResult);
