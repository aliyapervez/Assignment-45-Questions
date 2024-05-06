//Question No:40
//Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, album_title, num_tracks) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (num_tracks !== undefined) {
        album['tracks'] = num_tracks;
    }
    return album;
}
//calling three functions and creating 3 variables with differnt values
var album1 = make_album("Aliya", "Album title 1");
//Print values of our object created my function
console.log(album1);
var album2 = make_album("Fatima", "Album title 2");
console.log(album2);
//calling a make function with third parameter
var album3 = make_album("Atif", "Album title 3", 10);
console.log(album3);
