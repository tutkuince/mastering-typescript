var describePerson = function (person) {
    return "Person: ".concat(person.name, ",\n    Age: ").concat(person.age, ",\n    parents: ").concat(person.parentNames.mom, ", ").concat(person.parentNames.dad, ".");
};
var result = describePerson({ name: 'Okan', age: 45, parentNames: { mom: 'Buse', dad: 'Fatih' } });
console.log(result);
var printSong = function (song) {
    return "Title: ".concat(song.title, ", Artist: ").concat(song.artist, ", Number of Streams: ").concat(song.numStreams, "\n            Credits => Producer: ").concat(song.credits.producer, ", Writer: ").concat(song.credits.writer);
};
var calculatePayout = function (song) {
    return song.numStreams * 0.0033;
};
var mySong = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 123123,
    credits: { producer: "Phil Spector", writer: "Alex North" }
};
var printSongResult = printSong(mySong);
console.log(printSongResult);
console.log("---------------------------");
var calculatePayoutResult = calculatePayout(mySong);
console.log(calculatePayoutResult);
